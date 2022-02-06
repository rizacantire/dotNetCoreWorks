using Application.Features.Commands.Books.BookAdd;
using Application.Features.Commands.Categories.Categories;
using Application.Features.Commands.Categories.Categories.CategoryDelete;
using Application.Features.Queries.Categories.GetCategories;
using Application.Models.Authors;
using Application.Models.Books;
using Application.Models.Categories;
using AutoMapper;
using Domain.Entities;


namespace Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Categories
            CreateMap<Category, CategoryAddVm>().ReverseMap();
            CreateMap<Category, CategoryVm>().ReverseMap();
            CreateMap<Category, CategoryUpdateVm>().ReverseMap();
            CreateMap<Category, CategoryAddCommand>().ReverseMap();

            CreateMap<Category, GetAllCategoriesListQuery>().ReverseMap();
            CreateMap<CategoryVm, GetAllCategoriesListQuery>().ReverseMap();
            CreateMap<GetAllCategoriesListQuery, CategoryVm>().ReverseMap();
            CreateMap<Category, CategoryDeleteCommand>().ReverseMap();






            CreateMap<CategoryAddVm, Category>().ReverseMap();
            CreateMap<CategoryVm, Category>().ReverseMap();
            CreateMap<CategoryUpdateVm, Category>().ReverseMap();
            CreateMap<CategoryAddCommand, Category>().ReverseMap();
            #endregion

            #region Books
            CreateMap<Book, BookVm>().ReverseMap();
            CreateMap<Book, BookAddVm>().ReverseMap();
            CreateMap<Book, BookUpdateVm>().ReverseMap();
            CreateMap<Book, BookAddCommand>().ReverseMap();
            #endregion

            #region Authors
            CreateMap<Author, AuthorVm>().ReverseMap();
            CreateMap<Author, AuthorAddVm>().ReverseMap();
            CreateMap<Author, AuthorUpdateVm>().ReverseMap();
            #endregion
        }
    }
}
