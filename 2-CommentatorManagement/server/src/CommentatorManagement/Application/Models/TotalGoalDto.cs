using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities;
namespace Application.Models
{
    public class TotalGoalDto
    {
        public TotalGoalDto(int totalGoal, int count,List<TotalGoalMatchDto> matchs)
        {
            TotalGoal = totalGoal;
            Count = count;
            Matchs = matchs;
        }

        public int TotalGoal { get; set; }
        public int Count { get; set; }
        public List<TotalGoalMatchDto> Matchs { get; set; }
    }
}
