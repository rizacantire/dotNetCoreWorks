using System.Security.Claims;
using Application.Contracts.Services;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,User")]
    public class UserBooksController : ControllerBase
    {
        private readonly IUsersBooksService _usersBooksService;
        private readonly IMapper _mapper;

        public UserBooksController(IUsersBooksService usersBooksService, IMapper mapper)
        {
            _usersBooksService = usersBooksService;
            _mapper = mapper;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_usersBooksService.GetAll().Result);
        }

        [HttpPost]
        public IActionResult Add([FromBody] UsersBooksAddVm book)
        {
            int userId = SignedUserId();
            book.UserId = userId;

            return Ok(_usersBooksService.Add(_mapper.Map<UsersBooks>(book)));
        }


        [HttpGet("getByUser")]
        public IActionResult GetByUser()
        {
            // var identityKey = string.Empty  ;
            // if (HttpContext.User.Identity is ClaimsIdentity identity)
            // {
            //     identityKey = identity.FindFirst(ClaimTypes.NameIdentifier).Value;
            // }

             int userId = SignedUserId();
  
            return Ok(_usersBooksService.GetByUserId(userId));
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
