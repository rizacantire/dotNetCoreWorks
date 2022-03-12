using Application.Contracts.Repositories;
using Domain.Entities;
using Infrastructure.Contracts.Repositories.Commons;
using Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Repositories
{
    public class MatchRepository : RepositoryBase<Match>, IMatchRepository
    {
        public MatchRepository(Context dbContext) : base(dbContext)
        {
        }

    
    }
}
