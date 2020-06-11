const router = require("express").Router();
const { Book } = require("../models");
const Sequelize = require('sequelize');
const getAuthorCategoryId = require("../middlewares/getAuthorCategoryId")
const Op = Sequelize.Op;

router.get("/", getAuthorCategoryId, (req, res, next) => {
  const { title } = req.query;
  const { authorId, categoryId } = req
  const option = { include: ["Author", "Category"] };

  if (title) {
    option.where = {
      title: {
        [Op.like]: `%${title}%`
      }
    };
  } else if (authorId) {
    option.where = {
      AuthorId: authorId
    };
  } else if (categoryId) {
    option.where = {
      CategoryId: categoryId
    };
  }

  Book.findAll(option)
    .then((books) => {
      const booksData = books.map((book) => {
        let bookData = {
          id: book.id,
          title: book.title,
          AuthorId: 1,
          CategoryId: 2,
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
          Author: book.Author.name,
          Category: book.Category.name,
        }
        return bookData
      });
      res.status(200).json(booksData);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  const { title, AuthorId, CategoryId } = req.body;

  Book.create({
    title,
    AuthorId,
    CategoryId,
  })
    .then((book) => {
      res.status(201).json({
        msg: `Add book with title ${book.title} success`,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", (req, res, next) => {
  const { title, AuthorId, CategoryId } = req.body;
  const { id } = req.params;

  Book.update(
    {
      title,
      AuthorId,
      CategoryId,
    },
    {
      where: { id: Number(id) },
    }
  )
    .then((book) => {
      res.status(200).json({ msg: `Book with id ${id} updated successfully` });
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Book.destroy({
    where: { id: Number(id) },
  })
    .then((book) => {
      res.status(200).json({ msg: `Book with id ${id} deleted successfully` });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
