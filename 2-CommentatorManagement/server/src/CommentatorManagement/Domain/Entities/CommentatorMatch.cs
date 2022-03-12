using Domain.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class CommentatorMatch : BaseEntity
    {
        public int CommentatorId { get; set; }
        public Commentator Commentator { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
    }
}
