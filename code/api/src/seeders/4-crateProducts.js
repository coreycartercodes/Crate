'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crateProducts', [
      {
        crateId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 1,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 2,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 2,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        crateId: 2,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}