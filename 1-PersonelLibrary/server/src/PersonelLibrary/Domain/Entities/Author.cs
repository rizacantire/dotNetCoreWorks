using Domain.Commons;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Author : Person
    {
        public List<Book> Books { get; set; }
    }
}