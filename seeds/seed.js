
const blogData = require('./blogData.json');
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');
const seedDatabase = async () => {

  await sequelize.sync({ force: true });
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
    });
  }

  process.exit(0);
};

seedDatabase();
