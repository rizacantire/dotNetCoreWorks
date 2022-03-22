﻿using Application.Features.Commands.Authentications.SignUpUser;
using Application.Features.Commands.Users.ChangeRole;
using Application.Features.Queries.Authentications.GetUser;
using Application.Models.Authentications;
using Application.Settings;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public readonly IMediator _mediator;
        private readonly JwtSettings _jwtSettings;
        public AuthController(IMediator mediator,
            IOptionsSnapshot<JwtSettings> jwtSettings
            )
        {
            _mediator = mediator;
            _jwtSettings = jwtSettings.Value;
        }
        [HttpPost("SignUp")]
        public async Task<IActionResult> SignUp(SignUpUserCommand signUpUserCommand)
        {
            var result = await _mediator.Send(signUpUserCommand);

            if (result != 0)
                return Ok();

            return BadRequest("User not created");
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> SignIn([FromQuery] string email, string password)
        {
            var query = new GetUserByEmailAndPasswordQuery(email, password);
            var userModel = await _mediator.Send(query);

            if (userModel != null)
                return Ok(GenerateJwt(userModel));
            
            return BadRequest("Email or password invalid");
        }

        [HttpPost("ChangeRole")]
        public IActionResult ChangeUserRole(ChangeRoleCommand command)
        {

            return Ok(_mediator.Send(command));
        }

        private string GenerateJwt(UserModel userModel)
        {
            var userFullName = userModel.FirstName + " " + userModel.LastName;
            var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, userModel.Id.ToString()),
                    new Claim(ClaimTypes.Name, userModel.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, userModel.Id.ToString()),
                    new Claim("UserRole",userModel.Roles.FirstOrDefault()?.ToString()),
                    new Claim("FullName", userFullName)

            };

            var roleClaims = userModel.Roles.Select(r => new Claim(ClaimTypes.Role, r));
            claims.AddRange(roleClaims);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.Secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_jwtSettings.ExpirationInDays));

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Issuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
