using Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class UsersBooks : EntityBase
    {
        public int UserId { get; set; }
        public User User { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
        public bool IsRead { get; set; }
        public DateTime StartReadDate { get; set; }
        public DateTime FinishReadDate { get; set; }
    }
}
