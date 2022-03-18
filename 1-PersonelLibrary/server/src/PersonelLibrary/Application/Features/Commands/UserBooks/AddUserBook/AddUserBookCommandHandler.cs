using System.Threading;
using System.Threading.Tasks;
using Application.Contracts.Repositories;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Commands.UserBooks.AddUserBook
{
    public class AddUserBookCommandHandler : IRequestHandler<AddUserBookCommand, UsersBooksAddVm>
    {
        
        private readonly IUsersBooksRepository _repository;
        private readonly IMapper _mapper;

        public AddUserBookCommandHandler(IUsersBooksRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UsersBooksAddVm> Handle(AddUserBookCommand request, CancellationToken cancellationToken)
        {
            var getList =await _repository.GetAllAsync();
            foreach (var item in getList)
            {
                if(item.UserId == request.UserId && item.BookId == request.BookId)
                {
                    throw new System.Exception("hata");
                } 
            }
            var result =await _repository.AddAsync(_mapper.Map<UsersBooks>(request));
            return request;
        }
    }
}