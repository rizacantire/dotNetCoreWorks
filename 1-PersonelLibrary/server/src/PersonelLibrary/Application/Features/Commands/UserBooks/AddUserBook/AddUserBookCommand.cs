using Application.Models.UsersBooks;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Commands.UserBooks.AddUserBook
{
    public class AddUserBookCommand : UsersBooksAddVm,IRequest<UsersBooksAddVm>
    {
    }
}
