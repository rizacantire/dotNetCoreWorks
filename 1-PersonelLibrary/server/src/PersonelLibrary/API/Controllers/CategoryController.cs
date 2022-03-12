using Application.Contracts.Services;
using Application.Features.Commands.Categories.CategoryAdd;
using Application.Features.Commands.Categories.CategoryDelete;
using Application.Features.Commands.Categories.CategoryUpdate;
using Application.Features.Queries.Categories.GetCategories;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryService _categoryService;
        private readonly IMediator _mediatr;


        public CategoryController(ICategoryService categoryService, IMediator mediator)
        {
            _categoryService = categoryService;
            _mediatr = mediator;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var result = _mediatr.Send(new GetAllCategoriesListQuery());
            return Ok(result.Result);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] CategoryAddCommand category)
        {
            var result = await _mediatr.Send(category);

            return Ok(result);
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete([FromQuery] CategoryDeleteCommand removeCommand)
        {
            var result = await _mediatr.Send(removeCommand);

            return Ok(result);
        }

        [HttpPut()]
        public async Task<IActionResult> Update([FromBody] CategoryUpdateCommand updateCommand)
        {
            var result = await _mediatr.Send(updateCommand);

            return Ok(result);
        }



    }
}
