using Application.Models.Authors;
using Application.Models.Categories;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authors.AuthorUpdate
{
    public class AuthorUpdateCommand : AuthorUpdateVm, IRequest
    {
      
    }
}
