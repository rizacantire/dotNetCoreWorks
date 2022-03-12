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
    public interface ICommentatorMatchService : IServiceBase<CommentatorMatch>
    {
        Task<IReadOnlyList<CommentatorMatch>> GetAllDetails();
        Task RemoveAsyncById(int id);
        CommentatorMatch GetByDetailQuery(int id);
        StatisticDto GetStatistics(int id);
    }
}
