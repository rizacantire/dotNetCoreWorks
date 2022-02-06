using Domain.Commons;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Category : EntityBase
    {
        public string Name { get; set; }
        public List<Book> Books { get; set; }
    }
}