using Application.Features.Commands.Categories.CategoryAdd;
using FluentValidation;


namespace Application.Validators.Categories
{
    public class CategoryAddValidator : AbstractValidator<CategoryAddCommand>
    {
        public CategoryAddValidator()
        {
            RuleFor(c => c.Name).NotEmpty();
        }
    }
}
