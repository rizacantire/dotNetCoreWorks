using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Entities;
namespace Application.Models
{
    public class TotalGoalMatchDto
    {
       
        public string MatchHomeName { get; set; }
        public string MatchAwayName { get; set; }
        public int MatchHomeGoalCount { get; set; }
        public int MatchAwayGoalCount { get; set; }
       
    }
}
