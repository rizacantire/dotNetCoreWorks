using Application.Contracts.Services;
using Application.Models.Authors;
using Application.Models.Books;
using AutoMapper;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class BookAddXmlService : IBookXmlService
    {
        private readonly IBookService _bookService;
        private readonly ICategoryService _categoryService;
        private readonly IAuthorService _authorService;
        private readonly IMapper _mapper;

        public BookAddXmlService(IBookService bookService, ICategoryService categoryService, IAuthorService authorService, IMapper mapper)
        {
            _bookService = bookService;
            _categoryService = categoryService;
            _authorService = authorService;
            _mapper = mapper;
        }

        public async Task<IReadOnlyList<BookDetailVm>> GetXmlDatas(IFormFile file)
        {

            var bookList = await _bookService.GetBookDetails();
            var authorList = await _authorService.GetAll();
            var categoryList = await _categoryService.GetAll();
            var addedList = new List<BookDetailVm>();
            
            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                using (var package = new ExcelPackage(stream))
                {
                    //free license
                    ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

                    ExcelWorksheet ws = package.Workbook.Worksheets.First();
                    var rowCount = ws.Dimension.Rows;
                    for (int row = 2; row <= rowCount; row++)
                    {
                        

                        var author = new AuthorAddVm {FirstName= ws.Cells[row, 2].Value.ToString().Trim(),
                            LastName= ws.Cells[row, 3].Value.ToString().Trim()
                        };
                        var authorExist = authorList.Where(u=>u.FirstName == author.FirstName&&u.LastName==author.LastName).FirstOrDefault();
                        if (authorExist == null)
                        {
                            var addedNewAuthor = await _authorService.Add(_mapper.Map<Author>(author));
                            authorExist = addedNewAuthor;
                          
                            authorList = await _authorService.GetAll();
                           
                        }
                        var category = new Category {Name= ws.Cells[row, 4].Value.ToString().Trim() };
                        var categoryExist = categoryList.Where(u => u.Name == category.Name).FirstOrDefault();
                        if(categoryExist == null)
                        {
                            var addNewCategory = await _categoryService.Add(_mapper.Map<Category>(category));
                            categoryExist = addNewCategory;
                            categoryList = await _categoryService.GetAll();
                        }

                        var addedItem = new BookDetailVm
                        {
                            Name = ws.Cells[row, 1].Value.ToString().Trim(),
                            AuthorId = authorExist.Id,
                            CategoryId = categoryExist.Id,
                            AuthorFirstName = authorExist.FirstName,
                            AuthorLastName = authorExist.LastName,
                            CategoryName = categoryExist.Name,
                            Page = int.Parse(ws.Cells[row, 5].Value!=null? ws.Cells[row, 5].Value.ToString().Trim():"0")
                        };

                        var bookExist = bookList.Where(u => 
                                                    u.Name == addedItem.Name && u.AuthorId == addedItem.AuthorId).FirstOrDefault();

                       if(bookExist == null)
                        {
                            var es = addedList.Contains(addedItem);
                            if (es == false) addedList.Add(addedItem);
                           //await _bookService.Add(addedItem);
                           //bookList = await _bookService.GetAll();
                        }


                    }
                }
            }
            return _mapper.Map<IReadOnlyList<BookDetailVm>>(addedList);
        }
    }
}
