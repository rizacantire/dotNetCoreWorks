using Application.Contracts.Repositories;
using Application.Contracts.Repositories.Commons;
using Application.Contracts.Services;
using Infrastructure.Contracts.Repositories;
using Infrastructure.Contracts.Repositories.Common;
using Infrastructure.Contracts.Services;
using Infrastructure.Contracts.Services.Common;
using Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
    public static class InfrastructureServiceResgistration
    {
        public static IServiceCollection AddInfrastructureService(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<LibraryContext>(options =>
                options.UseSqlite(configuration.GetConnectionString("SqliteConnectionString")));
                        //.UseSqlServer(configuration.GetConnectionString("SqlConnectionString")));
            services.AddTransient(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));

            services.AddScoped<IAuthorRepository, AuthorRepository>();
            services.AddScoped<IAuthorService, AuthorService>();

            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<ICategoryService, CategoryService>();

            services.AddScoped<IBookRepository, BookRepository>();
            services.AddScoped<IBookService, BookService>();

            services.AddScoped<IUsersBooksRepository, UsersBooksRepository>();
            services.AddScoped<IUsersBooksService, UsersBooksService>();

            services.AddScoped<IUserRepository, UserRepository>();
            
            services.AddScoped<IBookXmlService, BookAddXmlService>();



            return services;
        }
    }
}
