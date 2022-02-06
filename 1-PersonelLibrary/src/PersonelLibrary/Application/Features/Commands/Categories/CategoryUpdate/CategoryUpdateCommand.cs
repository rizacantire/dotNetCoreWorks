using Application.Models.Categories;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.CategoryUpdate
{
    public class CategoryUpdateCommand : IRequest
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
