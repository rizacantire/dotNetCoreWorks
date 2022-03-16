using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.Features.Commands.Authentications.UpdateUser
{
    public class UpdateUserCommand : IRequest<IdentityResult>
    {
       
    }
}