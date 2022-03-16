using Application.Contracts.Repositories;
using Application.Models.Authentications;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Queries.Authentications.GetAllUser
{
    public class GetAllUserQueryHandler : IRequestHandler<GetAllUserQuery, IList<User>>
    {

        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly RoleManager<Role> _roleManager;

        public GetAllUserQueryHandler(IUserRepository userRepository, IMapper mapper, RoleManager<Role> roleManager)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _roleManager = roleManager;
        }

        public async Task<IList<User>> Handle(GetAllUserQuery request, CancellationToken cancellationToken)
        {
            var userList = _userRepository.GetAll();
            return _mapper.Map<IList<User>>(userList);
        }
    }
}
