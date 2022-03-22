using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Queries.Exports.ExportAuthors
{
    public class ExportAuthorsQuery :IRequest
    {
        public string SavePath { get; set; }
    }
}
