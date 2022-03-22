using Application.Contracts.Repositories;
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
    public class UserRepository : IUserRepository
    {
        private readonly LibraryContext _dbContext;

        public UserRepository(LibraryContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }
        public async Task<User> AddAsync(User entity)
        {
            _dbContext.Set<User>().Add(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }

        public async Task UpdateAsync(User entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task RemoveAsync(User entity)
        {
            _dbContext.Set<User>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }


        public  async Task<IReadOnlyList<User>> GetAllAsync()
        {
            var list =await _dbContext.Set<User>().ToListAsync();

            return list;

        }

        public async Task<User> GetAsync(Expression<Func<User , bool>> predicate = null)
        {
            return await _dbContext.Set<User>().Where(predicate).FirstOrDefaultAsync();
        }


        public async Task<User> GetByIdAsync(int id)
        {
            return await _dbContext.Set<User>().FindAsync(id);
        }


        public async Task<IReadOnlyList<User>> GetAllAsync(Expression<Func<User , bool>> predicate = null, Func<IQueryable<User>, IOrderedQueryable<User>> orderBy = null, bool disableTracking = true, string includeString = null, params string[] includeStrings)
        {
            IQueryable<User> query = _dbContext.Set<User>();
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

        public virtual async Task AddRangeAsync(IEnumerable<User> entities)
        {
            await _dbContext.Set<User>().AddRangeAsync(entities);
            await _dbContext.SaveChangesAsync();
        }
    }
}
