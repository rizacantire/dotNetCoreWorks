using Application.Contracts.Repositories;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.Queries.Exports.ExportAuthors
{
    public class ExportAuthorsQueryHandler : IRequestHandler<ExportAuthorsQuery>
    {
        private readonly IAuthorRepository _repository;

        public ExportAuthorsQueryHandler(IAuthorRepository repository)
        {
            _repository = repository;
          
        }

        public async Task<Unit> Handle(ExportAuthorsQuery request, CancellationToken cancellationToken)
        {
            var authorList =await _repository.GetAllAsync();

            string folder = @"C:\Users\riza_\Desktop\yazar-export.xlsx";
           


            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            using (var package = new ExcelPackage())
            {
                ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("Yazar");
                var currentRow = 1;
                worksheet.Cells[currentRow, 1].Value = "FirstName";
                worksheet.Cells[currentRow,2].Value = "LastName";
                //workSheet.Cells.LoadFromCollection(authorList);
                foreach (var author in authorList)
                {
                    currentRow++;
                    worksheet.Cells[currentRow, 1].Value = author.FirstName;
                    worksheet.Cells[currentRow, 2].Value = author.LastName;
                }
                using (var stream = new MemoryStream())
                {
                    package.SaveAs(stream);
                }
                    
            }       

            return Unit.Value;
        }
    }
}
