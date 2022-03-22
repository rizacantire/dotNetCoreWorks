using Application.Models.Books;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Books.BookAddRange
{
    public class BookAddRangeCommand : List<BookAddVm>, IRequest
    {
    }
}
