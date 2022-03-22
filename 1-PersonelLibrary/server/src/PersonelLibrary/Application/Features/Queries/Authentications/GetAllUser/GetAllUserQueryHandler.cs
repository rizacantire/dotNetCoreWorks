using Application.Contracts.Repositories;
using Application.Models.Authentications;
using Application.Models.UsersBooks;
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
    public class GetAllUserQueryHandler : IRequestHandler<GetAllUserQuery, IList<UserModel>>
    {

        private readonly IUserRepository _userRepository;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly RoleManager<Role> _roleManager;

        public GetAllUserQueryHandler(IUserRepository userRepository, IMapper mapper, RoleManager<Role> roleManager, UserManager<User> userManager)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public async Task<IList<UserModel>> Handle(GetAllUserQuery request, CancellationToken cancellationToken)
        {
            string[] includes = {"UsersBooks","UsersBooks.Book", "UsersBooks.Book.Author", "UsersBooks.Book.Category" };
            var userList =await _userRepository.GetAllAsync(includeStrings: includes );
            var userModelList = new List<UserModel>();
            foreach(var user in userList)
            {
                var userModel = new UserModel();
                userModel = _mapper.Map<UserModel>(user);
                userModel.Roles = await _userManager.GetRolesAsync(user);
                userModel.Books = _mapper.Map<IList<UsersBooksVm>>(user.UsersBooks);
                userModelList.Add(userModel);
            }
            return userModelList;
        }
    }
}
