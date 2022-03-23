using Application.Contracts.Repositories;
using Application.Exeptions;
using Application.Models.UsersBooks;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.UserBooks.DeleteUserBook
{
    public class DeleteUserBookCommandHandler : IRequestHandler<DeleteUserBookCommand, UsersBooksDeleteVm>
    {
        private readonly IUsersBooksRepository _repository;
        private readonly IMapper _mapper;

        public DeleteUserBookCommandHandler(IUsersBooksRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UsersBooksDeleteVm> Handle(DeleteUserBookCommand request, CancellationToken cancellationToken)
        {
            var delteItem =await _repository.GetByIdAsync(request.Id);
            if (delteItem == null)
                throw new BusinessException("Öğe bulunamadı");
            if (delteItem.UserId != request.UserId)
                throw new BusinessException("Yetkiniz bulunmamkta.");

            await _repository.RemoveAsync(delteItem);
            
            return request;
        }
    }
}
