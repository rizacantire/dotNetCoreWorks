using Application.Contracts.Repositories;
using Application.Models.Authors;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Queries.Authors.GetAuthors
{
    public class GetAllAuthorsListQueryHandler : IRequestHandler<GetAllAuthorsListQuery, IList<AuthorVm>>
    {
        private readonly IAuthorRepository _AuthorRepository;
        private readonly IMapper _mapper;

        public GetAllAuthorsListQueryHandler(IAuthorRepository AuthorRepository, IMapper mapper)
        {
            _AuthorRepository = AuthorRepository;
            _mapper = mapper;
        }

        public async Task<IList<AuthorVm>> Handle(GetAllAuthorsListQuery request, CancellationToken cancellationToken)
        {
            var Authors = await _AuthorRepository.GetAllAsync();
            var returnList = _mapper.Map<IList<AuthorVm>>(Authors);
            return returnList;
        }
    }
}
