using Application.Contracts.Repositories;
using Domain.Entities;
using Infrastructure.Contracts.Repositories.Common;
using Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Repositories
{
    public class UsersBooksRepository : RepositoryBase<UsersBooks>, IUsersBooksRepository
    {
        public UsersBooksRepository(LibraryContext dbContext) : base(dbContext)
        {
        }

        public IList<UsersBooks> GetByUser(int userID)
        {
            var list = base.GetAllAsync(b => b.UserId == userID).Result.ToList();
            return list;
           

        }
    }
}
