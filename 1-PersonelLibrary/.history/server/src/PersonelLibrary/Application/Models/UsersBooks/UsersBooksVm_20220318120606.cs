using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.UsersBooks
{
    public class UsersBooksVm
    {
        public int Id { get; set; }
        public string BookName { get; set; }
        public string BookAuthorFirstName { get; set; }
        public string BookAuthorLastName { get; set; }
        public int BookPage { get; set; }
        public string BookCategoryName { get; set; }
        public bool IsRead { get; set; }
        public DateTime? StartReadDate { get; set; }
        public DateTime? FinishReadDate { get; set; }

    }
}
