﻿using Application.Contracts.Repositories.Commons;
using Application.Models.UsersBooks;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Repositories
{
    public interface IUsersBooksRepository : IRepositoryBase<UsersBooks>
    {
        IList<UsersBooks> GetByUser(int userId);
    }
   
}
