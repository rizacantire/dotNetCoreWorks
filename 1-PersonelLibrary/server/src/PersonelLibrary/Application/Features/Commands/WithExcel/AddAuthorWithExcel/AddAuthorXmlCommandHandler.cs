using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.WithExcel.AddAuthorWithExcel
{
    public class AddAuthorXmlCommandHandler : IRequestHandler<AddAuthorXmlCommand>
    {

        public Task<Unit> Handle(AddAuthorXmlCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
