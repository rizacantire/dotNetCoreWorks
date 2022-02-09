using Application.Extentions;
using Application.Settings;
using Domain.Entities;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;

namespace API
{
    public static class ApiServiceRegistery
    {
        public static IServiceCollection AddApiService(this IServiceCollection services,
              IConfiguration configuration)
        {
            #region Settings

            services.Configure<JwtSettings>(configuration.GetSection("JWT"));
            var jwt = configuration.GetSection("JWT").Get<JwtSettings>();


            #endregion

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequiredLength = 8;
                options.Password.RequireNonAlphanumeric = true;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(1d);
                options.Lockout.MaxFailedAccessAttempts = 5;

            }).AddEntityFrameworkStores<LibraryContext>().AddDefaultTokenProviders();

            services.ConfigureCors();

            services.AddAuth(jwt);
            services.AddAuthorization(options =>
            {

                options.AddPolicy("Admin",
                    authBuilder =>
                    {
                        authBuilder.RequireRole("Administrators");
                    });

            });


            return services;
        }
    }
}
