using Application.BusinessRules;
using Application.Contracts.Repositories;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authors.AuthorAdd
{
    public class AuthorAddCommandHandler : IRequestHandler<AuthorAddCommand, Author>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;
        private readonly CheckAuthorIsExist _check;

        public AuthorAddCommandHandler(IAuthorRepository authorRepository, IMapper mapper, CheckAuthorIsExist check)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Author> Handle(AuthorAddCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByFullNameAsync(request.FirstName,request.LastName);

            var authorEntity = _mapper.Map<Author>(request);

            var result = await _authorRepository.AddAsync(authorEntity);

            return result;
        }
    }
}
