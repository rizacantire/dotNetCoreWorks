using Application.BusinessRules;
using Application.Contracts.Repositories;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authors.AuthorUpdate
{
    public class AuthorUpdateCommandHandler : IRequestHandler<AuthorUpdateCommand>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;
        private readonly CheckAuthorIsExist _check;

        public AuthorUpdateCommandHandler(IAuthorRepository authorRepository, IMapper mapper, CheckAuthorIsExist check)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Unit> Handle(AuthorUpdateCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var updateAuthor = await this._authorRepository.GetByIdAsync(request.Id);
            updateAuthor.FirstName = request.FirstName;
            updateAuthor.LastName = request.LastName;
            updateAuthor.BirthDate = request.BirthDate;
            await _authorRepository.UpdateAsync(updateAuthor);


            return Unit.Value;
        }
    }
}
