using Infrastructure.Persistence;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Application.Contracts.Repositories.Commons;
using Infrastructure.Contracts.Repositories.Commons;
using Application.Contracts.Repositories;
using Infrastructure.Contracts.Repositories;
using Application.Contracts.Services;
using Infrastructure.Contracts.Services;
using Infrastructure.Contracts.Services.Commons;
using System.Reflection;

namespace Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            services.AddDbContext<Context>(options =>

            options.UseSqlite(configuration.GetConnectionString("SqliteConnectionString")));
            services.AddTransient(typeof(IRepositoryBase<>), typeof(RepositoryBase<>));

            services.AddScoped<ICommentatorRepository, CommentatorRepository>();
            services.AddScoped<ICommentatorService, CommentatorService>();

            services.AddScoped<ICommentatorMatchRepository, CommentatorMatchRepository>();
            services.AddScoped<ICommentatorMatchService, CommentatorMatchService>();

            services.AddScoped<IMatchRepository, MatchRepository>();
            services.AddScoped<IMatchService, MatchService>();


            return services;
        }

    }
}
