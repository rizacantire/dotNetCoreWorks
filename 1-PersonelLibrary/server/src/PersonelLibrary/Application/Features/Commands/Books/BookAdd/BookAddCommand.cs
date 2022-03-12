using Application.Models.Books;
using Application.Models.Categories;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Books.BookAdd

{
    public class BookAddCommand : BookAddVm, IRequest<Book>
    {
    }
}
