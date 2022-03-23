using API.Controllers.Commons;
using Application.Features.Commands.Authors.AuthorAdd;
using Application.Features.Commands.Authors.AuthorUpdate;
using Application.Features.Commands.Authors.AuthorDelete;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Features.Queries.Authors.GetAuthors;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using Domain.Entities;
using System.IO;
using OfficeOpenXml;
using System.Threading.Tasks;
using System.Linq;
using Application.Models.Authors;
using Application.Contracts.Services;
using Application.Features.Commands.Authors.AuthorAddRange;
using Application.Features.Queries.Exports.ExportAuthors;
using System;
using System.Text;
//using Microsoft.Office.Interop.Excel;
namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthorController : ControllerBaseCommon<AuthorAddCommand, GetAllAuthorsListQuery, AuthorDeleteCommand, AuthorUpdateCommand>
    {
        private IAuthorService _authorService;
        private IMediator _mediator;
        public AuthorController(IMediator mediator, IAuthorService authorService) : base(mediator)
        {
            _authorService = authorService;
            _mediator = mediator;
        }

        [HttpPost(("GetAuthorWithXml"))]
        public  async Task<IActionResult> GetAuthorWithXml(IFormFile file)
        {
            var list = await _authorService.GetXmlDatas(file);
            
            return Ok(list);
        }

        [HttpPost(("AddRange"))]
        public async Task<IActionResult> AddRange(AuthorAddRangeCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
        
        [HttpPost("ExportData")]
        public async Task<IActionResult> ExportData([FromBody] ExportAuthorsQuery command)
        {
           

            //var command = new ExportAuthorsQuery();
            //command.SavePath = filePath;
            return Ok(await _mediator.Send(command));
        }
        [HttpGet("ExportDataPath")]
        public async Task<IActionResult> ExportDataPath()
        {
            var authorList = await _authorService.GetAll();


            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var currentRow = 1;
                var worksheet = package.Workbook.Worksheets.Add("Author");
                worksheet.Cells[currentRow, 1].Value = "FirstName";
                worksheet.Cells[currentRow, 2].Value = "LastName";
                //workSheet.Cells.LoadFromCollection(authorList);
                foreach (var author in authorList)
                {
                    currentRow++;
                    worksheet.Cells[currentRow, 1].Value = author.FirstName;
                    worksheet.Cells[currentRow, 2].Value = author.LastName;
                }
                package.Save();
            }
            stream.Position = 0;
            string excelName = $"UserList-{DateTime.Now.ToString("yyyyMMddHHmmssfff")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", excelName);
        }
    }
}
