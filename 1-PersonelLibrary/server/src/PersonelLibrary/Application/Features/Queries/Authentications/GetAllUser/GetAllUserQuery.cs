using Application.Models.Authentications;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Queries.Authentications.GetAllUser
{
    public class GetAllUserQuery : IRequest<IList<UserModel>>
    {
    }
}
