using Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services.Common
{
    public interface IServiceBase<T> where T : EntityBase
    {
        Task<IList<T>> GetAll();
        Task Add(T entity);
        Task Delete(T entity);
        Task Update(T entity);
        Task<T> GetById(int id);
    }
}
