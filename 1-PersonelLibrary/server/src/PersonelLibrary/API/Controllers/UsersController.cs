using Application.Features.Commands.Authentications.UpdateUser;
using Application.Features.Queries.Authentications.GetAllUser;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMediator _mediatr;

        public UsersController(IMediator mediatr)
        {
            _mediatr = mediatr;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var result = _mediatr.Send(new GetAllUserQuery());
            return Ok(result.Result);
        }

        [HttpPut]
        public IActionResult Update([FromBody] UpdateUserCommand command)
        {
            var result = _mediatr.Send(command);
            return Ok(result);
        }
    }
}
