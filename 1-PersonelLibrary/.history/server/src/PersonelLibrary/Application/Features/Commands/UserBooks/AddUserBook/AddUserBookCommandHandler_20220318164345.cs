using System.Threading;
using System.Threading.Tasks;
using Application.Contracts.Repositories;
using Application.Models.UsersBooks;
using AutoMapper;
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
        
           
            throw new System.NotImplementedException();
        }
    }
}