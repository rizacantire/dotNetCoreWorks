using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class CountDto
    {
        public CountDto(string teamName, int count)
        {
            TeamName = teamName;
            Count = count;
        }
        public string TeamName { get; set; }
        public int Count { get; set; }
    }
}
