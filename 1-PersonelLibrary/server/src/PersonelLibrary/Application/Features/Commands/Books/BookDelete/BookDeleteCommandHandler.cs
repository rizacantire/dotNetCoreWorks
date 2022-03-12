using Application.BusinessRules;
using Application.Contracts.Repositories;
using Application.Features.Commands.Books.BookDelete;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Categories.Books.BookDelete
{
    public class BookDeleteCommandHandler : IRequestHandler<BookDeleteCommand>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;
        private readonly CheckBookIsExist _check;

        public BookDeleteCommandHandler(IBookRepository bookRepository, IMapper mapper, CheckBookIsExist check)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
            _check = check;
        }
        public async Task<Unit> Handle(BookDeleteCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var deleteBook = await this._bookRepository.GetByIdAsync(request.Id);
      
            await _bookRepository.RemoveAsync(deleteBook);


            return Unit.Value;
        }

       

        
       
    }
}
