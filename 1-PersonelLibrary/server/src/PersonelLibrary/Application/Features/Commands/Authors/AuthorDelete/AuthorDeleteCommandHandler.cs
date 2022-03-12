using Application.BusinessRules;
using Application.Contracts.Repositories;
using Application.Features.Commands.Authors.AuthorDelete;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Authors.AuthorDelete
{
    public class AuthorDeleteCommandHandler : IRequestHandler<AuthorDeleteCommand>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;
        private readonly CheckAuthorIsExist _check;

        public AuthorDeleteCommandHandler(IAuthorRepository authorRepository, IMapper mapper, CheckAuthorIsExist check)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
            _check = check;
        }
        public async Task<Unit> Handle(AuthorDeleteCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var getCat = await this._authorRepository.GetByIdAsync(request.Id);
      
            await _authorRepository.RemoveAsync(getCat);


            return Unit.Value;
        }

       

        
       
    }
}
