using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Application.Models.Authors;
using Domain.Entities;
using Infrastructure.Contracts.Services.Common;
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
    public class AuthorService : ServiceBase<Author, IAuthorRepository>, IAuthorService
    {
        public AuthorService(IAuthorRepository repository) : base(repository)
        {
        }

        public async Task<IReadOnlyList<AuthorAddVm>> GetXmlDatas(IFormFile file)
        {
            var currentList = await base.GetAll();
            var list = new List<AuthorAddVm>();
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
                        var addedItem = new AuthorAddVm
                        {
                            FirstName = ws.Cells[row, 1].Value.ToString().Trim(),
                            LastName = ws.Cells[row, 2].Value!=null?ws.Cells[row, 2].Value.ToString().Trim():""
                        };
                        var returnItem = currentList.Where(u=>u.FirstName==addedItem.FirstName&&u.LastName==addedItem.LastName).FirstOrDefault();
                       
                        if(returnItem==null)
                            list.Add(addedItem);
                    }
                }
            }
            return list;
        }
    }
}
