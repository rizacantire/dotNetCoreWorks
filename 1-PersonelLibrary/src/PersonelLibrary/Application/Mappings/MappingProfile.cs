using Application.Features.Commands.Authentications.SignUpUser;
using Application.Features.Commands.Books.BookAdd;
using Application.Features.Commands.Categories.CategoryAdd;
using Application.Features.Commands.Categories.CategoryDelete;
using Application.Features.Queries.Books.GetBooks;
using Application.Features.Queries.Categories.GetCategories;
using Application.Models.Authentications;
using Application.Models.Authors;
using Application.Models.Books;
using Application.Models.Categories;
using Application.Models.UsersBooks;
using AutoMapper;
using Domain.Entities;


namespace Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Authentications

            CreateMap<User, SignUpUserCommand>().ReverseMap();
            CreateMap<User, UserModel>().ReverseMap();

            #endregion
            #region Categories
            CreateMap<Category, CategoryAddVm>().ReverseMap();
            CreateMap<Category, CategoryVm>().ReverseMap();
            CreateMap<Category, CategoryUpdateVm>().ReverseMap();
            CreateMap<Category, CategoryAddCommand>().ReverseMap();
            CreateMap<Category, BookDetailVm>().ReverseMap();


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
            CreateMap<Book, BookDetailVm>().ReverseMap(); 
                CreateMap<BookDetailVm, BookAddCommand>().ReverseMap();
            #endregion

            #region Authors
            CreateMap<Author, AuthorVm>().ReverseMap();
            CreateMap<Author, AuthorAddVm>().ReverseMap();
            CreateMap<Author, AuthorUpdateVm>().ReverseMap();
            CreateMap<Author, BookDetailVm>().ReverseMap();

            #endregion

            #region BookByAuthor
            CreateMap<Book, BookByAuthor>().ReverseMap();
            CreateMap<BookByAuthor, Book>().ReverseMap();

            CreateMap<Category, BookByAuthor>().ReverseMap();
            CreateMap<BookByAuthor, Category>().ReverseMap(); 
            CreateMap<BookByAuthor, GetAllBooksListQuery>().ReverseMap();
            CreateMap<GetAllBooksListQuery, BookByAuthor>().ReverseMap();
            #endregion

            #region Users Book

            CreateMap<UsersBooksAddVm, UsersBooks>().ReverseMap();

            #endregion
        }
    }
}
