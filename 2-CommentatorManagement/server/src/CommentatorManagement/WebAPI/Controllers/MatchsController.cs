using Application.Contracts.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchsController : ControllerBase
    {
        private readonly IMatchService _matchService;

        public MatchsController(IMatchService matchService)
        {
            _matchService = matchService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_matchService.GetAllAsync());
        }
        [HttpGet]
        [Route("GetAllDetail")]
        public IActionResult GetDetail()
        {
            return Ok(_matchService.GetAllDetails());
        }
        [HttpPost]
        public IActionResult Add([FromBody] Match match)
        {
            return Ok(_matchService.AddAsync(match));
        }
    }
}
