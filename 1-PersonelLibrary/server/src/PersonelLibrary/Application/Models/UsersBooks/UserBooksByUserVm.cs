using Application.Models.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.UsersBooks
{
    public class UserBooksByUserVm
    {
        public  IList<UsersBooksVm> UserBooks { get; set; }
        public UserVm User { get; set; }
    }
}
