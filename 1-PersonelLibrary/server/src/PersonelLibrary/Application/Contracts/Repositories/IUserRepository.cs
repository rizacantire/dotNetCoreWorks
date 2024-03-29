﻿using Application.Contracts.Repositories.Commons;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetAsync(Expression<Func<User, bool>> predicate = null);

        Task<IReadOnlyList<User>> GetAllAsync();
        Task<IReadOnlyList<User>> GetAllAsync(Expression<Func<User, bool>> predicate = null,
                                       Func<IQueryable<User>, IOrderedQueryable<User>> orderBy = null,
                                       bool disableTracking = true,
                                       string includeString = null, params string[] includeStrings);

        Task<User> GetByIdAsync(int id);

        Task<User> AddAsync(User entity);

        Task UpdateAsync(User entity);

        Task RemoveAsync(User entity);

        Task AddRangeAsync(IEnumerable<User> entities);
    }
}
