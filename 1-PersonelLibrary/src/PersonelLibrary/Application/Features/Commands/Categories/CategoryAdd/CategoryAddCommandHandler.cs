using Application.BusinessRules;
using Application.Contracts.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.CategoryAdd
{
    public class CategoryAddCommandHandler : IRequestHandler<CategoryAddCommand, Category>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly CheckCategoryIsExist _check;

        public CategoryAddCommandHandler(ICategoryRepository categoryRepository, IMapper mapper, CheckCategoryIsExist check)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Category> Handle(CategoryAddCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByNameAsync(request.Name);

            var categoryEntity = _mapper.Map<Category>(request);

            var result = await _categoryRepository.AddAsync(categoryEntity);

            return result;
        }
    }
}
