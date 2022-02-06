using API.Controllers.Commons;
using Application.Features.Commands.Books.BookAdd;
using Application.Features.Commands.Books.BookDelete;
using Application.Features.Commands.Books.BookUpdate;
using Application.Features.Queries.Books.GetBooks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBaseCommon<BookAddCommand, GetAllBooksListQuery, BookDeleteCommand, BookUpdateCommand>
    {
        public BookController(IMediator mediator) : base(mediator)
        {
        }
    }
}
