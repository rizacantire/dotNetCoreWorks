using Application.Models.Categories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Queries.Categories.GetCategories
{
    public class GetAllCategoriesListQuery : IRequest<IList<CategoryVm>>
    {
    }
}
