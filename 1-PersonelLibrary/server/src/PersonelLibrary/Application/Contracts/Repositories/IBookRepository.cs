using Application.Contracts.Repositories.Commons;
using Application.Models.Books;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Repositories
{
    public interface IBookRepository : IRepositoryBase<Book>
    {
        Task<IEnumerable<Book>> GetBookDetails(Expression<Func<Book, bool>> predicate = null, Func<IQueryable<Book>, IOrderedQueryable<Book>> orderBy = null, Task<List<Expression<Func<Book, object>>>> includes = null, bool disableTracking = true);
    }
}
