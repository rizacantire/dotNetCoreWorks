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
    public class CheckAuthorIsExist : ICheckIsExist
    {
        private readonly IAuthorRepository _authorRepository;

        public CheckAuthorIsExist(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task CheckIsExistByFullNameAsync(string firstName , string lastName)
        {
            var result = await _authorRepository.GetAsync(c => c.FirstName == firstName && c.LastName == lastName);
            if (result != null)
                throw new BusinessException("Author exists");

        }

        public async Task CheckIsExistByIdAsync(int AuthorId)
        {
            var result = await _authorRepository.GetByIdAsync(AuthorId);
            if (result == null)
                throw new BusinessException("Author is not exists");

        }

        public Task CheckIsExistByNameAsync(string name)
        {
            throw new NotImplementedException();
        }
    }
}
