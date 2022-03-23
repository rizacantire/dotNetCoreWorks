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

namespace Application.Features.Commands.Authors.AuthorAddRange
{
    public class AuthorAddRangeCommandHandler : IRequestHandler<AuthorAddRangeCommand>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;

        public AuthorAddRangeCommandHandler(IAuthorRepository authorRepository, IMapper mapper)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(AuthorAddRangeCommand request, CancellationToken cancellationToken)
        {
            var returnItem = _authorRepository.AddRangeAsync(_mapper.Map<List<Author>>(request));
            return  Unit.Value;
        }
    }
}
