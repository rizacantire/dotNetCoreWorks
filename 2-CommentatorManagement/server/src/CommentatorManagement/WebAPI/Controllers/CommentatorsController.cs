using Application.Contracts.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentatorsController : ControllerBase
    {
        private readonly ICommentatorService _commentatorService;

        public CommentatorsController(ICommentatorService commentatorService)
        {
            _commentatorService = commentatorService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _commentatorService.GetAllAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Commentator commentator)
        {
            return Ok(await _commentatorService.AddAsync(commentator));
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            var item =await _commentatorService.GetByIdAsync(id);
            return Ok(_commentatorService.RemoveAsync(item));
        }
    }
}
