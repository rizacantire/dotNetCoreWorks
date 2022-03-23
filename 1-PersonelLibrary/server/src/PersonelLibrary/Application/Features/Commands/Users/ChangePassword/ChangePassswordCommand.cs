using Application.Models.Users;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Users.ChangePassword
{
    public class ChangePassswordCommand : UserUpdateVm,IRequest<bool>
    {

    }
}

