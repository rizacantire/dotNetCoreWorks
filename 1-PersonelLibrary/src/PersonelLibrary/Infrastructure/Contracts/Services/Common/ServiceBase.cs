using Application.Contracts.Repositories.Commons;
using Application.Contracts.Services.Common;
using Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services.Common
{
    public class ServiceBase<T,TRepository> : IServiceBase<T> where T : EntityBase where TRepository : IRepositoryBase<T>
    {
        private readonly TRepository _repository;

        public ServiceBase(TRepository repository)
        {
            _repository = repository;
        }

        public async  Task Add(T entity)
        {
            _repository.AddAsync(entity);
        }

        public async Task Delete(T entity)
        {
            await _repository.RemoveAsync(entity);
        }

        public async Task<IList<T>> GetAll()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task Update(T entity)
        {
            await _repository.UpdateAsync(entity);
        }
    }
}
