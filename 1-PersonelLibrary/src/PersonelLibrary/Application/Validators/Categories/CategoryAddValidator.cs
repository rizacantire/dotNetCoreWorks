using Application.Features.Commands.Categories.Categories;
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
