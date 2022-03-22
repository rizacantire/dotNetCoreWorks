using API.Controllers.Commons;
using Application.Contracts.Services;
using Application.Features.Commands.Books.BookAdd;
using Application.Features.Commands.Books.BookAddRange;
using Application.Features.Commands.Books.BookDelete;
using Application.Features.Commands.Books.BookUpdate;
using Application.Features.Queries.Books.GetBooks;
using Application.Models.Books;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBaseCommon<BookAddCommand, GetAllBooksListQuery, BookDeleteCommand, BookUpdateCommand>
    {
        private IBookService _bookService;
        private IMapper _mapper;
        private readonly IBookXmlService _bookXmlService;
        private readonly IMediator _mediator;
        public BookController(IMediator mediator, IBookService bookService, IMapper mapper, IBookXmlService bookXmlService) : base(mediator)
        {
            _bookService = bookService;
            _mapper = mapper;
            _bookXmlService = bookXmlService;
            _mediator = mediator;
        }

        [HttpGet("getDetail")]
        public IActionResult GetDetail()
        {
            
            return Ok();
        }

        [HttpGet("{authorId}")]
        public IActionResult GetByAuthor(int authorId)
        {
           
            var list = _bookService.GetByAuthorId(authorId);
          
            return Ok(_mapper.Map<List<BookByAuthor>>(list));

        }

        [HttpPost("GetBookWithXml")]
        public IActionResult GetBookWithXml(IFormFile file)
        {

            var list = _bookXmlService.GetXmlDatas(file);

            return Ok(list);

        }

        [HttpPost(("AddRange"))]
        public async Task<IActionResult> AddRange(BookAddRangeCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}
