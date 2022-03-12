using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.CategoryDelete
{
    public class CategoryDeleteCommand : IRequest
    {
        public int Id { get; set; }
    }
}
