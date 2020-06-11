'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Author)
    Book.belongsTo(models.Category)
  };
  return Book;
};