using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Users.ChangeRole
{
    public class ChangeRoleCommand: IRequest<int>
    {
        public int UserId { get; set; }
        public string Role { get; set; }
    }
}
