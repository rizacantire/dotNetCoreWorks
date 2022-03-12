using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Application.Models;
using AutoMapper;
using Domain.Entities;
using Infrastructure.Contracts.Services.Commons;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class MatchService : ServiceBase<Match, IMatchRepository>, IMatchService
    {
        private readonly IMapper _mapper;


        public MatchService(IMatchRepository repository, IMapper mapper) : base(repository)
        {
        _mapper = mapper;
    }

        public IReadOnlyList<MatchDto> GetAllDetails()
        {
            var list = base.GetAllAsync();
            var returnList = _mapper.Map<IReadOnlyList<MatchDto>>(list.Result);
            return returnList;
        }
       
        
    }
}
