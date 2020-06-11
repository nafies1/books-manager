const { Author, Category } = require("../models");

module.exports = async (req, res, next) => {
  const { author, category } = req.query;
  if (author) {
    try {
      const authorData = await Author.findOne({
        where: {
          name: author,
        },
      });
      if (authorData) req.authorId = authorData.id;
      next();
    } catch (err) {
      next(err);
    }
  } else if (category) {
    try {
      const categoryData = await Category.findOne({
        where: {
          name: category,
        },
      });
      if (categoryData) req.categoryId = categoryData.id;
      next();
    } catch (err) {
      next(err);
    }
  }
};
