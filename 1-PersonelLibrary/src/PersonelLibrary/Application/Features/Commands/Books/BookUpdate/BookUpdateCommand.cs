using Application.Models.Books;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.Books.BookUpdate
{
    public class BookUpdateCommand : BookUpdateVm, IRequest
    {
       
    }
}
