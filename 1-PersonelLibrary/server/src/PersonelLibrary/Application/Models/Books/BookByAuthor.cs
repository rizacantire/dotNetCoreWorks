using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.Books
{
    public class BookByAuthor
    {
        public int Id { get; set; }
        public string AuthorFirstName { get; set; }
        public string AuthorLastName { get; set; }
        public string FullName { get{
            return AuthorFirstName +" "+ AuthorLastName;
            } 
        }

        public string Name { get; set; }
        public string CategoryName { get; set; }
        public int Page { get; set; }
    }
}
