"use strict";

//next

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_name: { type: Sequelize.STRING, unique: true },
        name: { type: Sequelize.STRING },
        pass: { type: Sequelize.STRING },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "sellers",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        code: { type: Sequelize.STRING, unique: true },
        name: { type: Sequelize.STRING, unique: true },

        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "categories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        name: { type: Sequelize.STRING, unique: true },
        description: { type: Sequelize.STRING },

        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "subcategories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        category_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "categories",
            key: "id",
          },
        },
        name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "products",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        subcategory_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "subcategories",
            key: "id",
          },
        },
        code: { type: Sequelize.STRING, unique: true },
        name: { type: Sequelize.STRING(250),  defaultValue: "" },

        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "customers",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: { type: Sequelize.STRING, unique: true },

        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "files",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING(600),
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "users",
            key: "id",
          },
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      "sales",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        invoice: { type: Sequelize.STRING, allowNull: true, defaultValue: '' },
        quanty: { type: Sequelize.INTEGER, defaultValue: 0 },
        price: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0 },
        discount: { type: Sequelize.FLOAT, allowNull: true, defaultValue:0 },
        return_: { type: Sequelize.INTEGER, allowNull: true, defaultValue:0 },
        total_return: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
        total_sale: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0 },
        total: { type: Sequelize.FLOAT, allowNull: true, defaultValue: 0 },
        product_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "products",
            key: "id",
          },
        },
        customer_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "customers",
            key: "id",
          },
        },
        seller_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "sellers",
            key: "id",
          },
        },
        file_id: {
          allowNull: true,
          unique: false,
          type: Sequelize.INTEGER,
          onDelete: "SET NULL",
          references: {
            model: "files",
            key: "id",
          },
        },
        date: { type: Sequelize.DATE },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

    await queryInterface.createTable(
      'records',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "users",
            key: "id",
          },
        },
        action: { type: Sequelize.STRING(255), allowNull: false },
        table: { type: Sequelize.STRING(255), allowNull: false },
        description: { type: Sequelize.STRING(800), allowNull: true },
        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE },
      },
      {
        initialAutoIncrement: 1001,
      }
    );

 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  },
};
