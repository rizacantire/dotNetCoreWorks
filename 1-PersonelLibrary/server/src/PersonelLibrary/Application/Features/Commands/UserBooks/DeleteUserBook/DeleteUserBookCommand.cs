using Application.Models.UsersBooks;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.UserBooks.DeleteUserBook
{
    public class DeleteUserBookCommand : UsersBooksDeleteVm, IRequest<UsersBooksDeleteVm>
    {
    }
}
