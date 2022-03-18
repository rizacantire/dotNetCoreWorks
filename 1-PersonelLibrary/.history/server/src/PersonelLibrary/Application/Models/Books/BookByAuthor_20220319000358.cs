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
        public string AthorFirstName { get; set; }
        public string AthorLastName { get; set; }
        public string FullName { get{
            return FullName;
        } 
        set=>FullName=this.AthorFirstName + this.AthorLastName; }

        public string Name { get; set; }
        public string CategoryName { get; set; }
        public int Page { get; set; }
    }
}
