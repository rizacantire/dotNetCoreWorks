using Application.Contracts.Services.Common;
using Application.Models.Authors;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Contracts.Services
{
    public interface IAuthorService : IServiceBase<Author>
    {
        Task<IReadOnlyList<AuthorAddVm>> GetXmlDatas(IFormFile file);

    }
}
