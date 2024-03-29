﻿using Application.Contracts.Services.Common;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services
{
    public interface IBookService : IServiceBase<Book>
    {
        IList<Book> GetByAuthorId(int authorId);
        Task<IEnumerable<Book>> GetBookDetails();

    }
}
