using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class StatisticDto
    {
        public int CommentatorId { get; set; }
        public int TotalMatch { get; set; }
        public int TotalGoal { get; set; }
        public int TotalRedCard { get; set; }
        public int TotalYellowCard { get; set; }
        public int TotalHomeWin { get; set; }
        public int TotalAwayWin { get; set; }
        public int TotalDraw { get; set; }
        public int TotalHomeGoal { get; set; }
        public int TotalAwayGoal { get; set; }
        public CountDto MostTeam { get; set; }
        public List<TotalGoalDto> TotalMostGoals { get; set; }

    }
}