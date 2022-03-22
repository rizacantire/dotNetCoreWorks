using Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Application.Contracts.Repositories.Commons
{
    public interface IRepositoryBase<T> where  T  : EntityBase
    {


        Task<T> GetAsync(Expression<Func<T, bool>> predicate = null);

        Task<IReadOnlyList<T>> GetAllAsync();
        Task<IReadOnlyList<T>> GetAllAsync(Expression<Func<T, bool>> predicate = null,
                                       Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                                       bool disableTracking = true,
                                       string includeString = null, params string[] includeStrings);

        Task<T> GetByIdAsync(int id);

        Task<T> AddAsync(T entity);

        Task UpdateAsync(T entity);

        Task RemoveAsync(T entity);

        Task AddRangeAsync(IEnumerable<T> entities);


    }
}
