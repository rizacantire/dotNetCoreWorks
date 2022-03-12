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
    public class CheckBookIsExist : ICheckIsExist
    {
        private readonly IBookRepository _bookRepository;

        public CheckBookIsExist(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task CheckIsExistByNameAsync(string bookName)
        {
            var result = await _bookRepository.GetAsync(c => c.Name == bookName);
            if (result != null)
                throw new BusinessException("Book name exists");

        }

        public async Task CheckIsExistByIdAsync(int bookId)
        {
            var result = await _bookRepository.GetByIdAsync(bookId);
            if (result == null)
                throw new BusinessException("Book is not exists");

        }
    }
}
