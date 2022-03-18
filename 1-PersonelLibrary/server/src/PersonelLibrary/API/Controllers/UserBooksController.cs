using System.Security.Claims;
using Application.Contracts.Services;
using Application.Features.Commands.UserBooks.AddUserBook;
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
    [Authorize(Roles = "Admin,User,Moderator")]
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

            return Ok(_usersBooksService.GetAll().Result);
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

        [HttpPut]
        public IActionResult UpdateBook([FromBody] UpdateUserBookCommand book)
        {
            return Ok(_mediator.Send(book));
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
