using Application.Models.Users;
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

namespace Application.Features.Commands.Users.ChangePassword
{
    public class ChangePassswordCommandHandler : IRequestHandler<ChangePassswordCommand,bool>
    {
        private readonly UserManager<User> _userManager;

        public ChangePassswordCommandHandler(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> Handle(ChangePassswordCommand request, CancellationToken cancellationToken)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.Email == request.Email);

            if (user == null)
                return false;

            var userSigingResult = await _userManager.CheckPasswordAsync(user, request.CurrentPassword);
            
            if (userSigingResult)
            {
                var result = await _userManager.ChangePasswordAsync(user,request.CurrentPassword,request.NewPassword);
                if(result.Succeeded==false) return false;
                return true;
            }

            return false;
        }
    }
}
