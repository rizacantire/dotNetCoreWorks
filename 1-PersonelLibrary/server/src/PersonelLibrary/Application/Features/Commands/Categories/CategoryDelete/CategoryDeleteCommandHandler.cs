using Application.BusinessRules;
using Application.Contracts.Repositories;
using Application.Features.Commands.Categories.CategoryDelete;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.Categories.CategoryDelete
{
    public class CategoryDeleteCommandHandler : IRequestHandler<CategoryDeleteCommand>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly CheckCategoryIsExist _check;

        public CategoryDeleteCommandHandler(ICategoryRepository categoryRepository, IMapper mapper, CheckCategoryIsExist check)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _check = check;
        }
        public async Task<Unit> Handle(CategoryDeleteCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var getCat = await this._categoryRepository.GetByIdAsync(request.Id);
      
            await _categoryRepository.RemoveAsync(getCat);


            return Unit.Value;
        }

       

        
       
    }
}
