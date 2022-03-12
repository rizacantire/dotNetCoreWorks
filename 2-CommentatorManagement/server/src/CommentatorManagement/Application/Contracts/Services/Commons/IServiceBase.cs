using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services.Commons
{
    public interface IServiceBase<T> where T : BaseEntity
    {
        Task<IReadOnlyList<T>> GetAllAsync();

        Task<T> GetAsync();

        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> GetsByIdAsync(int id);

        Task<T> AddAsync(T entity);
        Task AddRangeAsync(IEnumerable<T> entities);

        Task UpdateAsync(T entity);
        Task UpdateRangeAsync(IEnumerable<T> entities);

        Task RemoveAsync(T entity);
        Task RemoveRangeAsync(IEnumerable<T> entities);
    }
}
