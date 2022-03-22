using Application.Models.Books;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services
{
    public interface IBookXmlService
    {
        Task<IReadOnlyList<BookDetailVm>> GetXmlDatas(IFormFile file);
    }
}
