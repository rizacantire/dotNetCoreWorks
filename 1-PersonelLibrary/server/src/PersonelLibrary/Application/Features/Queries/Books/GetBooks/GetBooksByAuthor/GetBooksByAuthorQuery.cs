using Application.Models.Books;
using Application.Models.Categories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Queries.Books.GetBooks.GetBooksByAuthor
{
    public class GetBooksByAuthorQuery : IRequest<IList<BookByAuthor>>
    {
    }
}
