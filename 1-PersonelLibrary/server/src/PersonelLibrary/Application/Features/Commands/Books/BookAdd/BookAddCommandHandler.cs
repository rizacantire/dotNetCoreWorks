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

namespace Application.Features.Commands.Books.BookAdd
{
    public class BookAddCommandHandler : IRequestHandler<BookAddCommand, Book>
    {
        private readonly IBookRepository _BookRepository;
        private readonly IMapper _mapper;
        private readonly CheckBookIsExist _check;

        public BookAddCommandHandler(IBookRepository BookRepository, IMapper mapper, CheckBookIsExist check)
        {
            _BookRepository = BookRepository;
            _mapper = mapper;
            _check = check;
        }

        public async Task<Book> Handle(BookAddCommand request, CancellationToken cancellationToken)
        {
            await _check.CheckIsExistByNameAsync(request.Name);

            var bookEntity = _mapper.Map<Book>(request);

            var result = await _BookRepository.AddAsync(bookEntity);

            return result;
        }
    }
}
