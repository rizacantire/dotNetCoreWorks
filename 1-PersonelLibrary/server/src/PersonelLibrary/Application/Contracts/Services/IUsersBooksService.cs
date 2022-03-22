using Application.Contracts.Services.Common;
using Application.Models.Books;
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
        Task<IReadOnlyList<UsersBooksAdminVm>> GetAllAsync();
        Task<IEnumerable<IGrouping<User, UsersBooks>>> GetAllByGroupAsync();
        Task<UserBooksByUserVm> GetByUserIdDetail(int userId);

    }
}
