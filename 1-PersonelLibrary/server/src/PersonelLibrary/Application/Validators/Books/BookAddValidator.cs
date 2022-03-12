using Application.Features.Commands.Books.BookAdd;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Validators.Books
{
    public class BookAddValidator : AbstractValidator<BookAddCommand>
    {
        public BookAddValidator()
        {
            RuleFor(b=>b.Name).NotEmpty();
            RuleFor(b=>b.AuthorId).NotEmpty();
        }
    }
}
