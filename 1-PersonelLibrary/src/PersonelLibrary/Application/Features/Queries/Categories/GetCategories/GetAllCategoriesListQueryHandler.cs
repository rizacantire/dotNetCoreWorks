using Application.Contracts.Repositories;
using Application.Models.Categories;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Queries.Categories.GetCategories
{
    public class GetAllCategoriesListQueryHandler : IRequestHandler<GetAllCategoriesListQuery, IList<CategoryVm>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetAllCategoriesListQueryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<IList<CategoryVm>> Handle(GetAllCategoriesListQuery request, CancellationToken cancellationToken)
        {
            var categories = await _categoryRepository.GetAllAsync();
            var returnList = _mapper.Map<IList<CategoryVm>>(categories);
            return returnList;
        }
    }
}
