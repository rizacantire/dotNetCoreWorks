using Application.BusinessRules;
using Application.Contracts.Repositories;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.CategoryUpdate
{
    public class CategoryUpdateCommandHandler : IRequestHandler<CategoryUpdateCommand>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly CheckCategoryIsExist _check;

        public CategoryUpdateCommandHandler(ICategoryRepository categoryRepository, IMapper mapper, CheckCategoryIsExist check)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Unit> Handle(CategoryUpdateCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var getCat = await this._categoryRepository.GetByIdAsync(request.Id);
            getCat.Name = request.Name;

            await _categoryRepository.UpdateAsync(getCat);


            return Unit.Value;
        }
    }
}
