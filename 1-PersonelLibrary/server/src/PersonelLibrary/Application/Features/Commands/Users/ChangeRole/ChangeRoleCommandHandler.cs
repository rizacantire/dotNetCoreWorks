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

namespace Application.Features.Commands.Users.ChangeRole
{
    public class ChangeRoleCommandHandler : IRequestHandler<ChangeRoleCommand, int>
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly RoleManager<Role> _roleManager;

        public ChangeRoleCommandHandler(UserManager<User> userManager, IMapper mapper, RoleManager<Role> roleManager)
        {
            _userManager = userManager;
            _mapper = mapper;
            _roleManager = roleManager;
        }

        public async Task<int> Handle(ChangeRoleCommand request, CancellationToken cancellationToken)
        {
            var currentUser =await _userManager.FindByIdAsync(request.UserId.ToString());
            if (currentUser == null)
                return 0;
            var allRoles = _roleManager.Roles.ToList();
            var role = await _userManager.GetRolesAsync(currentUser);
            var currentRole = role[0].ToString();
            
            await _userManager.RemoveFromRoleAsync(currentUser, currentRole);
            await _userManager.AddToRoleAsync(currentUser,request.Role);

            return 1;
        }
    }
}
