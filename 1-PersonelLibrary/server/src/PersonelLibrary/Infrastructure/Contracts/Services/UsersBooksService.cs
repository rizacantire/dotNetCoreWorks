﻿using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Application.Models.Books;
using Application.Models.Users;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;
using Infrastructure.Contracts.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class UsersBooksService : ServiceBase<UsersBooks, IUsersBooksRepository>, IUsersBooksService
    {
        private readonly IUsersBooksRepository _usersBooksRepository;
        private readonly IMapper _mapper;
        public UsersBooksService(IUsersBooksRepository repository, IMapper mapper) : base(repository)
        {
            _usersBooksRepository = repository;
            _mapper = mapper;
        }

        public async Task<IReadOnlyList<UsersBooksVm>> GetByUserId(int userId)
        {
            string[] includes = { "Book", "Book.Author","Book.Category" };
           
            var list =await _usersBooksRepository.GetAllAsync(includeStrings:includes,predicate:u=>u.UserId==userId);
            return _mapper.Map<IReadOnlyList<UsersBooksVm>>(list);
            
        
        }
        public async Task<UserBooksByUserVm> GetByUserIdDetail(int userId)
        {
            string[] includes = { "Book", "Book.Author", "Book.Category","User" };

            var list = await _usersBooksRepository.GetAllAsync(includeStrings: includes, predicate: u => u.UserId == userId);
            UserBooksByUserVm returnItem = new();
            returnItem.UserBooks = _mapper.Map<IList<UsersBooksVm>>(list);
            var currentUsr = list.FirstOrDefault().User;
            returnItem.User = _mapper.Map<UserVm>(currentUsr);
            
            return returnItem;

        }

        public async Task<IReadOnlyList<UsersBooksAdminVm>> GetAllAsync()
        {
            string[] includes = { "Book", "Book.Author", "Book.Category","User" };
            var list = await _usersBooksRepository.GetAllAsync(includeStrings: includes);
            var groupList = list.GroupBy(u => u.User);
            return _mapper.Map<IReadOnlyList<UsersBooksAdminVm>>(groupList);


        }

        public async Task<IEnumerable<IGrouping<User, UsersBooks>>> GetAllByGroupAsync()
        {
            string[] includes = { "Book", "Book.Author", "Book.Category", "User" };
            
            var list = await _usersBooksRepository.GetAllAsync(includeStrings: includes);
            var groupList = list.GroupBy(u => u.User);
            return groupList;

        }

       
    }
}
