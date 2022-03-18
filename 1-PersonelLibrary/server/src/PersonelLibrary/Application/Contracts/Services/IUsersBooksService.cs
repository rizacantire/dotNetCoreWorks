using Application.Contracts.Services.Common;
using Application.Models.UsersBooks;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services
{
    public interface IUsersBooksService : IServiceBase<UsersBooks>
    {
        Task<IReadOnlyList<UsersBooksVm>> GetByUserId(int userId);
    }
}
