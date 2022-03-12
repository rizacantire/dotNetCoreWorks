using Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence
{
    public class LibraryContext : IdentityDbContext<User,Role,int>
    {
        public LibraryContext()
        {
        }

        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {

        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Book>  Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        //public DbSet<Person> Persons { get; set; }
        public DbSet<UsersBooks> UsersBooks { get; set; }

    }
}
