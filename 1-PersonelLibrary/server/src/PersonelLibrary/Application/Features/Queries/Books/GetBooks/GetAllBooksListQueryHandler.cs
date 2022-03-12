using Application.Contracts.Repositories;
using Application.Features.Queries.Books.GetBooks;
using Application.Models.Books;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Queries.Books.GetBooks
{
    public class GetAllBooksListQueryHandler : IRequestHandler<GetAllBooksListQuery, IList<BookDetailVm>>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public GetAllBooksListQueryHandler(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<IList<BookDetailVm>> Handle(GetAllBooksListQuery request, CancellationToken cancellationToken)
        {
            var books =await _bookRepository.GetBookDetails();
            var returnList = _mapper.Map<IList<BookDetailVm>>(books);
            return returnList;
        }

      
    }
}
