using Application.Features.Commands.Authentications.SignUpUser;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Validators.Authentications.SignUp
{
    public class SignUpValidatior : AbstractValidator<SignUpUserCommand>
    {
        public SignUpValidatior()
        {
            RuleFor(c => c.Email).NotEmpty().WithMessage("{Email Address} is required.");
            RuleFor(c => c.Password).NotEmpty().WithMessage("{Password} is required.");
        }
    }
}
