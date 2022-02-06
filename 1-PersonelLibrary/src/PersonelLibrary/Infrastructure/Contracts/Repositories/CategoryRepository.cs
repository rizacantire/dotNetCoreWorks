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
    public class CategoryRepository : RepositoryBase<Category>, ICategoryRepository
    {
        public CategoryRepository(LibraryContext dbContext) : base(dbContext)
        {
        }
    }
}
