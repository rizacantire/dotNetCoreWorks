using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Application.Models;
using Domain.Entities;
using Infrastructure.Contracts.Services.Commons;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace Infrastructure.Contracts.Services
{
    public class CommentatorMatchService : ServiceBase<CommentatorMatch, ICommentatorMatchRepository>, ICommentatorMatchService
    {
        private IMapper _mapper;
        public CommentatorMatchService(ICommentatorMatchRepository repository, IMapper mapper) : base(repository)
        {
            _mapper = mapper;
        }

        public CommentatorMatch GetByDetailQuery(int id)
        {
            var sqlQuery = "SELECT count(*) as totalMatch,sum(Homegoalcount) as homegoal,sum(Awaygoalcount) as awaygoal,sum(Totalgoalcount) as Totalgoal,sum(TeamAYellowCards) as homeYellow,sum(TeamARedCards) as homeRed,sum(TeamACardsNum) as homeTotalCard,+sum(TeamBYellowCards) as awayYellow,sum(TeamBRedCards) as awayRed,sum(TeamBCardsNum) as awayTotalCard from CommentatorMatchs inner join Matchs ON CommentatorMatchs.MatchId=Matchs.Id";

            var result = base.GetByDetailQuery(predicate: u => u.CommentatorId == 1, sqlQuery: sqlQuery);
            var list = GetAllDetails().Result;
            var totalMatch = list.Count(u => u.CommentatorId == id);
            var homeGoals = list.Sum(u => u.Match.Homegoalcount);
            return result;
        }

        public Task<IReadOnlyList<CommentatorMatch>> GetAllDetails()
        {
            string[] includes = { "Commentator", "Match" };
            var list = base.GetAllAsync(includeStrings: includes);
            return list;
        }

        public async Task RemoveAsyncById(int id)
        {
            var removeItem = await base.GetByIdAsync(id);
            if (removeItem != null) await base.RemoveAsync(removeItem);

        }

        public StatisticDto GetStatistics(int id)
        {
            int homeWinCount = 0; int awayWinCount = 0; int drawCount = 0;

            string[] includes = { "Commentator", "Match" };
            var list = base.GetAllAsync(includeStrings: includes).Result;
            var filter = list.Where(u => u.CommentatorId == id).ToList();
            var awayGoal = filter.Sum(u => u.Match.Awaygoalcount);
            var homeGoal = filter.Sum(u => u.Match.Homegoalcount);
            var totalMatch = filter.Count();
            var homeRedCard = filter.Sum(u => u.Match.TeamARedCards);
            var awayRedCard = filter.Sum(u => u.Match.TeamBRedCards);
            var homeYellowCard = filter.Sum(u => u.Match.TeamAYellowCards);
            var awayYellowCard = filter.Sum(u => u.Match.TeamBYellowCards);
            var mostGoals = filter.GroupBy(u => u.Match.Totalgoalcount).ToList();
            var homeTeams = filter.GroupBy(u => u.Match.HomeName).ToList();
            var awayTeams = filter.GroupBy(u => u.Match.AwayName).ToList();
            var countList = new List<CountDto>();
            var totalGoalList = new List<TotalGoalDto>();

            // List<Match> listem = new List<Match>();
            // IEnumerable<IGrouping<int, CommentatorMatch>> groups = filter.GroupBy(x => x.Match.Totalgoalcount);
            // IEnumerable<CommentatorMatch> smths = groups.SelectMany(group => group);
            // List<Match> newList = smths.Select(u=>u.Match).ToList();


            mostGoals.ForEach(goal =>
            {
                IEnumerable<CommentatorMatch> smths = goal.Select(group => group);
                totalGoalList.Add(new TotalGoalDto(goal.Key, goal.Count(), _mapper.Map<List<TotalGoalMatchDto>>(smths)));
            });
            filter.ForEach(u =>
            {
                if (u.Match.Winningteam == u.Match.HomeId)
                {
                    homeWinCount++;
                }
                else if (u.Match.Winningteam == u.Match.AwayId)
                {
                    awayWinCount++;
                }
                else
                {
                    drawCount++;
                }


            });
            foreach (var team in homeTeams)
            {
                var teamName = team.Key;
                var count = team.Count();
                countList.Add(new CountDto(teamName, count));

            }
            foreach (var team in awayTeams)
            {
                var teamName = team.Key;
                var count = team.Count();
                var gg = countList.Find(u => u.TeamName == teamName);

                if (gg != null)
                {
                    gg.Count += count;
                }
                else
                {
                    countList.Add(new CountDto(teamName, count));
                }

            }
            var returnItem = new StatisticDto
            {
                CommentatorId = id,
                TotalMatch = totalMatch,
                TotalGoal = awayGoal + homeGoal,
                TotalHomeGoal = homeGoal,
                TotalAwayGoal = awayGoal,
                TotalRedCard = homeRedCard + awayRedCard,
                TotalYellowCard = awayYellowCard + homeRedCard,
                MostTeam = countList.OrderByDescending(u => u.Count).FirstOrDefault(),
                TotalHomeWin = homeWinCount,
                TotalAwayWin = awayWinCount,
                TotalDraw = drawCount,
                TotalMostGoals = totalGoalList.OrderByDescending(u => u.TotalGoal).ToList()
            };
            return returnItem;
        }
    }
}
