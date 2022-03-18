using Application.Contracts.Repositories;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Commands.UserBooks
{
    public class UpdateUserBookCommandHandler : IRequestHandler<UpdateUserBookCommand, UsersBooksUpdateVm>
    {
        private readonly IUsersBooksRepository _repository;
        private readonly IMapper _mapper;

        public UpdateUserBookCommandHandler(IUsersBooksRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UsersBooksUpdateVm> Handle(UpdateUserBookCommand request, CancellationToken cancellationToken)
        {
            var updateItem =await _repository.GetByIdAsync(request.Id);
            if (updateItem != null)
            {
                updateItem.IsRead =request.IsRead;
                updateItem.StartReadDate = request.StartReadDate;
                updateItem.FinishReadDate = request.FinishReadDate;
                await _repository.UpdateAsync(updateItem);
            }
            return request;
        }
    }
}
