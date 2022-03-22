using Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;
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
        

        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {

        }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Book>  Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        //public DbSet<Person> Persons { get; set; }
        public DbSet<UsersBooks> UsersBooks { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
            SeedUsers(builder);
            SeedRoles(builder);
            SeedUserRole(builder);
        }

        private void SeedUsers(ModelBuilder builder)
        {
            var admin = new User()
            {
                Id = 1,
                FirstName = "Rıza Can",
                LastName = "Tire",
                Email = "admin@admin.com"

            };

            var user1 = new User()
            {
                Id = 2,
                FirstName = "Hilmi",
                LastName = "Kantarcı",
                Email = "hilmi@kantar.com"

            };
           
            
            PasswordHasher<User> passwordHasher = new PasswordHasher<User>();
            admin.PasswordHash = passwordHasher.HashPassword(admin, "Admin123");
            user1.PasswordHash = passwordHasher.HashPassword(user1, "Abcd123");

            builder.Entity<User>().HasData(admin);
            builder.Entity<User>().HasData(user1);
        
        }

        private void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<Role>().HasData(
                new Role() { Id = 1, Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "Admin" },
                new Role() { Id = 2, Name = "User", ConcurrencyStamp = "2", NormalizedName = "User" }

                );
        }

        private void SeedUserRole(ModelBuilder builder)
        {
            builder.Entity<UserRole>().HasData(
                new UserRole() { UserId = 1, RoleId = 1 },
                new UserRole() { UserId = 2, RoleId = 2 }
              
                );
        }


    }
}
