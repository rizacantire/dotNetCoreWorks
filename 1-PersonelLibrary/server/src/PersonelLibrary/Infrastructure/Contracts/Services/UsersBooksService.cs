using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Domain.Entities;
using Infrastructure.Contracts.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class UsersBooksService : ServiceBase<UsersBooks, IUsersBooksRepository>, IUsersBooksService
    {
        private readonly IUsersBooksRepository _usersBooksRepository;
        public UsersBooksService(IUsersBooksRepository repository) : base(repository)
        {
            _usersBooksRepository = repository;
        }

        public IList<UsersBooks> GetByUserId(int userId)
        {
            return _usersBooksRepository.GetByUser(userId);
            
        
        }
    }
}
