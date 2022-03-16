using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.Features.Commands.Authentications.UpdateUser
{
    public class UpdateUserCommand : IRequest<IdentityResult>
    {
         public string Email { get; set; }

        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
       
    }
}