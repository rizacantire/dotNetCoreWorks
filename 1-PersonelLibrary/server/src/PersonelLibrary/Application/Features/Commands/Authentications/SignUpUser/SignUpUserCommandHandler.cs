using Application.Models.Authentications;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authentications.SignUpUser
{
    public class SignUpUserCommandHandler : IRequestHandler<SignUpUserCommand, int>
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly RoleManager<Role> _roleManager;

        public SignUpUserCommandHandler(UserManager<User> userManager,
             IMapper mapper,
            RoleManager<Role> roleManager
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
        }

        public async Task<int> Handle(SignUpUserCommand request, CancellationToken cancellationToken)
        {
            var userEntity = _mapper.Map<User>(request);

            userEntity.UserName = request.Email;
           
           
            var getRole = _roleManager.RoleExistsAsync("USER");
            var defaultrole = _roleManager.FindByNameAsync("User").Result;

            var userCreateResult = await _userManager.CreateAsync(userEntity, request.Password);
           
            if (userCreateResult.Succeeded)
            {
                var user = _userManager.Users.SingleOrDefault(u => u.Email == request.Email);
               await _userManager.AddToRoleAsync(user, defaultrole.Name);
                //_userManager.AddToRoleAsync(user, "USER");
               
                return user.Id;
            }

            return 0;
        }
    }
}
