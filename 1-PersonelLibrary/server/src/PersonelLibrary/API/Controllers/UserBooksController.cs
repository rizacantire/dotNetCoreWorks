using System.Security.Claims;
using Application.Contracts.Services;
using Application.Features.Commands.UserBooks.AddUserBook;
using Application.Features.Commands.UserBooks.DeleteUserBook;
using Application.Features.Commands.UserBooks.UpdateUserBook;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserBooksController : ControllerBase
    {
        private readonly IUsersBooksService _usersBooksService;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UserBooksController(IUsersBooksService usersBooksService, IMapper mapper, IMediator mediator)
        {
            _usersBooksService = usersBooksService;
            _mapper = mapper;
            _mediator = mediator;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_usersBooksService.GetAllAsync().Result);
        }
        
        [HttpGet]
        [Route("GetAllByGroupAsync")]
        public IActionResult GetAllByGroupAsync()
        {

            return Ok(_usersBooksService.GetAllByGroupAsync().Result);
        }

        [HttpPost]
        public IActionResult Add([FromBody] AddUserBookCommand book)
        {
            int userId = SignedUserId();
            book.UserId = userId;

            return Ok(_mediator.Send(book));
        }


        [HttpGet("getByUser")]
        public IActionResult GetByUser()
        {
          
             int userId = SignedUserId();
  
            return Ok(_usersBooksService.GetByUserId(userId));
        }


        [HttpGet("{id}")]

        public IActionResult getByUserId(int id)
        {

            return Ok(_usersBooksService.GetByUserIdDetail(id));
        }
        [HttpPut]
        public IActionResult UpdateBook([FromBody] UpdateUserBookCommand book)
        {
            return Ok(_mediator.Send(book));
        }
        [HttpPost]
        [Route("delete")]
       
        public  IActionResult DeleteUserBooks([FromBody] DeleteUserBookCommand command)
        {
            int userId = SignedUserId();
            command.UserId = userId;
            return Ok(_mediator.Send(command));
        }

        int SignedUserId()
        {
            var identityKey = string.Empty  ;
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                identityKey = identity.FindFirst(ClaimTypes.NameIdentifier).Value;
            }

            return int.Parse(identityKey);
        }

       
    }
}
