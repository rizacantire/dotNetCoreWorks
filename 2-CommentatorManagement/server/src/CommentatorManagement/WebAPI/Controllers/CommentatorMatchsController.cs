using Application.Contracts.Services;
using Application.Models;
using AutoMapper;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentatorMatchsController : ControllerBase
    {
        private readonly ICommentatorMatchService _commentatorMatchService;
        private readonly IMapper _mapper;

        public CommentatorMatchsController(ICommentatorMatchService commentatorMatchService, IMapper mapper)
        {
            _commentatorMatchService = commentatorMatchService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _commentatorMatchService.GetAllDetails());
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] AddCommentatorMatchDto commentatorMatch)
        {
            var result = _mapper.Map<CommentatorMatch>(commentatorMatch);
            return Ok(await _commentatorMatchService.AddAsync(result));
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _commentatorMatchService.GetByIdAsync(id);
            var res = _commentatorMatchService.RemoveAsync(item);
            return Ok(res);
        }

        [HttpGet]
        [Route("GetById")]
        public IActionResult Get([FromQuery] int id)
        {
            return Ok(_commentatorMatchService.GetStatistics(id));
        }
    }
}
