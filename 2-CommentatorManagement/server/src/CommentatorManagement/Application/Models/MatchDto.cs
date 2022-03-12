using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class MatchDto
    {
        public int Id { get; set; }
        public string HomeName { get; set; }
        public string AwayName { get; set; }
        public string Season { get; set; }
        public string Status { get; set; }
        public int GameWeek { get; set; }
        public string Homegoals { get; set; }
        public string Awaygoals { get; set; }
        public int Homegoalcount { get; set; }
        public int Awaygoalcount { get; set; }
        public int Totalgoalcount { get; set; }
        public int DateUnix { get; set; }
        
        
    }
}
