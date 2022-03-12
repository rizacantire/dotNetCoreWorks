using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<Commentator> Commentators { get; set; }
        public DbSet<CommentatorMatch> CommentatorMatchs {get; set; }
        public DbSet<Match> Matchs { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedCommentator(builder);
        }

        private void SeedCommentator(ModelBuilder builder)
        {
            builder.Entity<Commentator>().HasData(
                new Commentator() {Id=1, FirstName ="Erman",LastName ="Yaşar"},
                new Commentator() { Id = 2, FirstName = "Orkun", LastName = "Çolakoğlu" },
                new Commentator() { Id = 3, FirstName = "Gökhan", LastName = "Abdik" }
                );
        }

    }
}
