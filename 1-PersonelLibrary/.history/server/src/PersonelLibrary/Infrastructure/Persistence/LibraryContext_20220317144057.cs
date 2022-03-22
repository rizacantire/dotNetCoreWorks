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
                FirstName = "Ahmet",
                LastName = "Tire",
                Email = "ahmet@admin.com"

            };

            var user2 = new User()
            {
                Id = 3,
                FirstName = "Demiralp",
                LastName = "Tire",
                Email = "d@d.com"

            };

            var user3 = new User()
            {
                Id = 4,
                FirstName = "Yasemin",
                LastName = "Tire",
                Email = "y@y.com"

            };

            var user4 = new User()
            {
                Id = 5,
                FirstName = "Hasibe",
                LastName = "Tire",
                Email = "h@h.com"

            };


            PasswordHasher<User> passwordHasher = new PasswordHasher<User>();
            admin.PasswordHash = passwordHasher.HashPassword(admin, "Admin123");
            user1.PasswordHash = passwordHasher.HashPassword(user1, "Abcd123");
            user2.PasswordHash = passwordHasher.HashPassword(user2, "Abcd123");
            user3.PasswordHash = passwordHasher.HashPassword(user3, "Abcd123");
            user4.PasswordHash = passwordHasher.HashPassword(user4, "Abcd123");





            builder.Entity<User>().HasData(admin);
            builder.Entity<User>().HasData(user1);
            builder.Entity<User>().HasData(user2);
            builder.Entity<User>().HasData(user3);
            builder.Entity<User>().HasData(user4);


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
                new UserRole() { UserId = 2, RoleId = 2 },
                new UserRole() { UserId = 3, RoleId = 2 },
                new UserRole() { UserId = 4, RoleId = 2 },
                new UserRole() { UserId = 5, RoleId = 2 }

                );
        }


    }
}
