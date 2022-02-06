using Application.Contracts.Services.Common;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers.Commons
{
    public abstract class ControllerBaseCommon<TAddCommand,TGetAllListQuey,TDeleteCommand,TUpdateCommand> : ControllerBase where TGetAllListQuey: new()
    {
        private readonly IMediator _mediatr;


        public ControllerBaseCommon(IMediator mediator)
        {
            _mediatr = mediator;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var result = _mediatr.Send(new TGetAllListQuey());
            return Ok(result.Result);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TAddCommand category)
        {
            var result = await _mediatr.Send(category);

            return Ok(result);
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete([FromQuery] TDeleteCommand removeCommand)
        {
            var result = await _mediatr.Send(removeCommand);

            return Ok(result);
        }

        [HttpPut()]
        public async Task<IActionResult> Update([FromBody] TUpdateCommand updateCommand)
        {
            var result = await _mediatr.Send(updateCommand);

            return Ok(result);
        }
    }
}
