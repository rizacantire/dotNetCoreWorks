using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.UsersBooks
{
    public class UsersBooksAddVm
    {
        public int UserId { get; set; }
        public int BookId { get; set; }
        public bool IsRead { get; set; }
        public DateTime? StartReadDate { get; set; }
        public DateTime? FinishReadDate { get; set; }
    }
}
