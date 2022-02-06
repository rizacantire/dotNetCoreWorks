using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.BusinessRules.Commons
{
    public interface ICheckIsExist
    {
        Task CheckIsExistByNameAsync(string name);
        Task CheckIsExistByIdAsync(int id);
    }
}
