using Application.BusinessRules.Commons;
using Application.Contracts.Repositories;
using Application.Exeptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.BusinessRules
{
    public class CheckCategoryIsExist : ICheckIsExist
    {
        private readonly ICategoryRepository _categoryRepository;

        public CheckCategoryIsExist(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task CheckIsExistByNameAsync(string categoryName)
        {
            var result = await _categoryRepository.GetAsync(c=>c.Name == categoryName);
            if (result != null)
                throw new BusinessException("Category name exists");
           
        }

        public async Task CheckIsExistByIdAsync(int categoryId)
        {
            var result = await _categoryRepository.GetByIdAsync(categoryId);
            if (result == null)
                throw new BusinessException("Category name is not exists");

        }

    }
}
