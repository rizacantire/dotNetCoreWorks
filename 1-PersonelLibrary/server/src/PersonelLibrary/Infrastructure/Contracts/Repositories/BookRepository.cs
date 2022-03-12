using Application.Contracts.Repositories;
using Application.Models.Books;
using Domain.Entities;
using Infrastructure.Contracts.Repositories.Common;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Repositories
{
    public class BookRepository : RepositoryBase<Book>, IBookRepository
    {
        LibraryContext _dbContext;


        public BookRepository(LibraryContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Book>> GetBookDetails(Expression<Func<Book, bool>> predicate = null, Func<IQueryable<Book>, IOrderedQueryable<Book>> orderBy = null, Task<List<Expression<Func<Book, object>>>> includes = null, bool disableTracking = true)
        {
            var list = await _dbContext.Books.Include(b => b.Author)
                                        .Include(b=>b.Category)
                                        .ToListAsync();
            return list;
        }

     

    }
}
