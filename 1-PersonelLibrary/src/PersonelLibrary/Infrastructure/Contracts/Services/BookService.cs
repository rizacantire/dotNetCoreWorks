using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Domain.Entities;
using Infrastructure.Contracts.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class BookService : ServiceBase<Book, IBookRepository>, IBookService
    {
        private IBookRepository _bookRepository;
        public BookService(IBookRepository repository) : base(repository)
        {
            _bookRepository = repository;
        }


        public IList<Book> GetByAuthorId(int authorId)
        {
            var list = _bookRepository.GetBookDetails().Result.Where(c => c.AuthorId == authorId);
            return list.ToList();
        }
    }
}

