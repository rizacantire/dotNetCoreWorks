using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.Books
{
    public class BookVm
    {
        public string Name { get; set; }
        public int Page { get; set; }
        public Author Author { get; set; }
        public Category Category { get; set; }
    }
}
