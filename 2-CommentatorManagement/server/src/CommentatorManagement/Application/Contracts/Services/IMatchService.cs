using Application.Contracts.Services.Commons;
using Application.Models;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services
{
    public interface IMatchService : IServiceBase<Match>
    {
        IReadOnlyList<MatchDto> GetAllDetails();
        // IReadOnlyList<StatisticDto> GetAllStatistics();
        // StatisticDto GetStatisticsByUserId(int id);
    }
}
