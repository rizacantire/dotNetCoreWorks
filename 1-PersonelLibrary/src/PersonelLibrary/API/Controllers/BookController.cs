using API.Controllers.Commons;
using Application.Contracts.Services;
using Application.Features.Commands.Books.BookAdd;
using Application.Features.Commands.Books.BookDelete;
using Application.Features.Commands.Books.BookUpdate;
using Application.Features.Queries.Books.GetBooks;
using Application.Models.Books;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBaseCommon<BookAddCommand, GetAllBooksListQuery, BookDeleteCommand, BookUpdateCommand>
    {
        private IBookService _bookService;
        private IMapper _mapper;
        public BookController(IMediator mediator, IBookService bookService, IMapper mapper) : base(mediator)
        {
            _bookService = bookService;
            _mapper = mapper;
        }

        [HttpGet("getDetail")]
        public IActionResult GetDetail()
        {
            
            return Ok();
        }

        [HttpGet("{authorId}")]
        public IActionResult GetByAutohr(int authorId)
        {
           
            var list = _bookService.GetByAuthorId(authorId);
          
            return Ok(_mapper.Map<List<BookByAuthor>>(list));

        }
    }
}
