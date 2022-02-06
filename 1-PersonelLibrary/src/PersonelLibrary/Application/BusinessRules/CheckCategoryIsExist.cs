using Application.Contracts.Repositories;
using Application.Exeptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.Categories
{
    public class CheckCategoryIsExist
    {
        ICategoryRepository _categoryRepository;

        public CheckCategoryIsExist(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task CheckCategoryIsExistAsync(string categoryName)
        {
            var result = await _categoryRepository.GetAsync(c=>c.Name == categoryName);
            if (result != null)
                throw new BusinessException("Category name exists");
           
        }

        public async Task CheckCategoryIsExistByIdAsync(int categoryId)
        {
            var result = await _categoryRepository.GetByIdAsync(categoryId);
            if (result == null)
                throw new BusinessException("Category name is not exists");

        }

    }
}
