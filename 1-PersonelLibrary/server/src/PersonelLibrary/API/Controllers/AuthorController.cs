using API.Controllers.Commons;
using Application.Features.Commands.Authors.AuthorAdd;
using Application.Features.Commands.Authors.AuthorUpdate;
using Application.Features.Commands.Authors.AuthorDelete;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Features.Queries.Authors.GetAuthors;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthorController : ControllerBaseCommon<AuthorAddCommand, GetAllAuthorsListQuery, AuthorDeleteCommand, AuthorUpdateCommand>
    {
        public AuthorController(IMediator mediator) : base(mediator)
        {
        }
    }
}
