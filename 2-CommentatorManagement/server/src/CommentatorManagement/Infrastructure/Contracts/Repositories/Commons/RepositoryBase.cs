using Application.Contracts.Repositories.Commons;
using Domain.Commands;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Repositories.Commons
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : BaseEntity
    {
        private readonly Context _dbContext;

        public RepositoryBase(Context dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<T> AddAsync(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        public async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _dbContext.Set<T>().AddRangeAsync(entities);
            await _dbContext.SaveChangesAsync();
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
        public async Task<T> GetAsync(Expression<Func<T, bool>> predicate, params string[] includeStrings)
        {
            IQueryable<T> query = _dbContext.Set<T>().Where(predicate);

            if (includeStrings.Length > 0)
            {
                foreach (var include in includeStrings)
                {
                    query = query.Include(include);
                }
            }


            return await query.FirstOrDefaultAsync();
        }
        public async Task<T> GetAsync(Expression<Func<T, bool>> predicate = null, string includeString = null, params string[] includeStrings)
        {
            IQueryable<T> query = _dbContext.Set<T>();

            if (predicate != null) query = query.Where(predicate);


            if (!string.IsNullOrWhiteSpace(includeString)) query = query.Include(includeString);

            if (includeStrings.Length > 0)
            {
                foreach (var include in includeStrings)
                {
                    query = query.Include(include);
                }
            }
            return await _dbContext.Set<T>().FirstOrDefaultAsync();
        }


        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public T GetByDetailQuery(Expression<Func<T, bool>> predicate,string sqlQuery)
        {
            var result = _dbContext.Set<T>().FromSqlRaw(sqlQuery).Where(predicate).FirstOrDefault();
           return result;
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



        public virtual async Task<IEnumerable<T>> GetByIdsAsync(IEnumerable<int> ids)
        {
            return await _dbContext.Set<IEnumerable<T>>().FindAsync(ids);
        }
        public virtual async Task<IReadOnlyList<T>> GetByIdsAsync(params int[] ids)
        {
            var list = new List<T>();
            foreach (var id in ids)
            {
                var result = await GetByIdAsync(id);
                list.Add(result);
            }
          
            return list;
        }



        public async Task UpdateRangeAsync(IEnumerable<T> entities)
        {
            _dbContext.Entry(entities).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task RemoveRangeAsync(IEnumerable<T> entities)
        {
            _dbContext.Set<T>().RemoveRange(entities);
            await _dbContext.SaveChangesAsync();
        }

       
    }
}
