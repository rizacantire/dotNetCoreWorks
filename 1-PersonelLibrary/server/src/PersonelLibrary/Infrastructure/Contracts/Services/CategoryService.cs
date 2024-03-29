﻿using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Domain.Entities;
using Infrastructure.Contracts.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class CategoryService : ServiceBase<Category, ICategoryRepository>, ICategoryService
    {
        public CategoryService(ICategoryRepository repository) : base(repository)
        {
        }
    }
}
