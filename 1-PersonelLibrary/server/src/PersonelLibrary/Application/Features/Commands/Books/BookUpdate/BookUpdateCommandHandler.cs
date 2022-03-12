using Application.BusinessRules;
using Application.Contracts.Repositories;
using Application.Features.Commands.Books.BookUpdate;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.Books.BookUpdate
{
    public class BookUpdateCommandHandler : IRequestHandler<BookUpdateCommand>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;
        private readonly CheckBookIsExist _check;

        public BookUpdateCommandHandler(IBookRepository bookRepository, IMapper mapper, CheckBookIsExist check)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Unit> Handle(BookUpdateCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByIdAsync(request.Id);
            var updateBook = await this._bookRepository.GetByIdAsync(request.Id);
            updateBook.Name = request.Name;
            updateBook.CategoryId = request.CategoryId;
            updateBook.AuthorId = request.AuthorId;
            updateBook.Page = request.Page;
            await _bookRepository.UpdateAsync(updateBook);


            return Unit.Value;
        }
    }
}
