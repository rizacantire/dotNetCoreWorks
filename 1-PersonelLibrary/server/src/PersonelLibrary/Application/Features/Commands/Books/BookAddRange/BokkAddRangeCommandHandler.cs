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

namespace Application.Features.Commands.Books.BookAddRange
{
    public class BokkAddRangeCommandHandler : IRequestHandler<BookAddRangeCommand>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public BokkAddRangeCommandHandler(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(BookAddRangeCommand request, CancellationToken cancellationToken)
        {
            await _bookRepository.AddRangeAsync(_mapper.Map<List<Book>>(request));
            return Unit.Value;
        }
    }
}
