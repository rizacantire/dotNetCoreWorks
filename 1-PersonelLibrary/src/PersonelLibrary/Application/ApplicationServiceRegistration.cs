using Application.BusinessRules;
using Application.Exeptions;
using Application.Features.Commands.Categories.Categories;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services,
               IConfiguration configuration)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());
            //services.AddScoped<BusinessException>();
            services.AddScoped<CheckCategoryIsExist>();
            services.AddScoped<CheckAuthorIsExist>();
            services.AddScoped<CheckBookIsExist>();

            return services;
        }
    }
}
