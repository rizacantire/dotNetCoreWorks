using Application.Contracts.Services;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
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

        public UserBooksController(IUsersBooksService usersBooksService, IMapper mapper)
        {
            _usersBooksService = usersBooksService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {

            return Ok(_usersBooksService.GetAll().Result);
        }

        [HttpPost]
        public IActionResult Add([FromBody] UsersBooksAddVm book)
        {

            return Ok(_usersBooksService.Add(_mapper.Map<UsersBooks>(book)));
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            return Ok(_usersBooksService.GetByUserId(id));
        }
    }
}
