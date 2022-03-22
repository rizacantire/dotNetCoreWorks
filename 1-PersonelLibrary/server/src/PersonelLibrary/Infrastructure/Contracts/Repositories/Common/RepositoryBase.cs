using Application.Contracts.Repositories.Commons;
using Domain.Commons;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Repositories.Common
{
    public class RepositoryBase<T> : IRepositoryBase<T> where  T  : EntityBase
    {
        private readonly LibraryContext _dbContext;

        public RepositoryBase(LibraryContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }
        public async Task<T> AddAsync(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        
        public async Task UpdateAsync(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task RemoveAsync(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }


        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            var list = await _dbContext.Set<T>().ToListAsync();

            return list;

        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> predicate = null)
        {
            return await _dbContext.Set<T>().Where(predicate).FirstOrDefaultAsync();
        }


        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }


        public async Task<IReadOnlyList<T>> GetAllAsync(Expression<Func<T, bool>> predicate = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, bool disableTracking = true, string includeString = null, params string[] includeStrings)
        {
            IQueryable<T> query = _dbContext.Set<T>();
            if (disableTracking) query = query.AsNoTracking();

            if (predicate != null) query = query.Where(predicate);

            if (orderBy != null)
                return await orderBy(query).ToListAsync();

            if (!string.IsNullOrWhiteSpace(includeString)) query = query.Include(includeString);

            if (includeStrings.Length > 0)
            {
                foreach (var include in includeStrings)
                {
                    query = query.Include(include);
                }
            }

            return await query.ToListAsync();
        }

        public virtual async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _dbContext.Set<T>().AddRangeAsync(entities);
            await _dbContext.SaveChangesAsync();
        }

    }
}
