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

namespace Application.Features.Queries.Books.GetBooks.GetBooksByAuthor
{
    public class GetBooksByAuthorQueryHandler : IRequestHandler<GetBooksByAuthorQuery, IList<BookByAuthor>>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public GetBooksByAuthorQueryHandler(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<IList<BookByAuthor>> Handle(GetBooksByAuthorQuery request, CancellationToken cancellationToken)
        {
            var books = _bookRepository.GetAllAsync();
            var returnList = _mapper.Map<IList<BookByAuthor>>(books);
            return (IList<BookByAuthor>)returnList;
        }

      
    }
}
