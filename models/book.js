'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_published: DataTypes.INTEGER
  });
  Book.associate = function(models) {
    // associations can be defined here
    Book.hasOne(models.Loan, { foreignKey: "book_id" });
  };
  return Book;
};