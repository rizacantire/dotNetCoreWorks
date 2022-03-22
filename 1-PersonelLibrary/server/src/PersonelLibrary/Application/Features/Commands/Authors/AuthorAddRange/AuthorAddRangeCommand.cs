using Application.Models.Authors;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authors.AuthorAddRange
{
    public class AuthorAddRangeCommand : List<AuthorAddVm>,IRequest
    {
    }
}
