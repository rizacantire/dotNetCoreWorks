using Application.Contracts.Repositories.Commons;
using Application.Contracts.Services.Commons;
using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services.Commons
{
    public class ServiceBase<T,TRepository> : IServiceBase<T> where T : BaseEntity where TRepository : IRepositoryBase<T>
    {
        private readonly TRepository _repository;

        public ServiceBase(TRepository repository)
        {
            _repository = repository;
        }
        public async Task<T> AddAsync(T entity)
        {
            return await _repository.AddAsync(entity);
        }

        public async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _repository.AddRangeAsync(entities);
        }
        public T GetByDetailQuery(Expression<Func<T, bool>> predicate,string sqlQuery)
        {
            return _repository.GetByDetailQuery(predicate,sqlQuery);
        }

        public async Task<IReadOnlyList<T>> GetAllAsync(Expression<Func<T, bool>> predicate = null,
                                      Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
                                      bool disableTracking = true,
                                      string includeString = null, params string[] includeStrings)
        {
            return await _repository.GetAllAsync(predicate,orderBy,disableTracking, includeString,  includeStrings);
        }

        public async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<T> GetAsync()
        {
            return await _repository.GetAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public Task<IReadOnlyList<T>> GetsByIdAsync(int id)
        {

            throw new NotImplementedException();
        }

        public async Task RemoveAsync(T entity)
        {
            await _repository.RemoveAsync(entity);
        }

        public async Task RemoveRangeAsync(IEnumerable<T> entities)
        {
            await _repository.RemoveRangeAsync(entities);
        }

        public async Task UpdateAsync(T entity)
        {
            await _repository.UpdateAsync(entity);
        }

        public async Task UpdateRangeAsync(IEnumerable<T> entities)
        {
            await _repository.AddRangeAsync(entities);
        }
    }
}
