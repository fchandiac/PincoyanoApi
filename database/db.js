require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize')
const db = {}

db.connection = new Sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    }
)


db.Users = require('./models/users')(db.connection, DataTypes)
db.Sellers = require('./models/sellers')(db.connection, DataTypes)
db.Categories = require('./models/categories')(db.connection, DataTypes)
db.Subcategories = require('./models/subcategories')(db.connection, DataTypes)
db.Products = require('./models/products')(db.connection, DataTypes)
db.Customers = require('./models/customers')(db.connection, DataTypes)
db.Sales = require('./models/sales')(db.connection, DataTypes)
db.Files = require('./models/files')(db.connection, DataTypes)
db.Records = require('./models/records')(db.connection, DataTypes)



db.Sales.belongsTo(db.Sellers)
db.Sales.belongsTo(db.Products)
db.Sales.belongsTo(db.Customers)
db.Sales.belongsTo(db.Files)
db.Subcategories.belongsTo(db.Categories)
db.Products.belongsTo(db.Subcategories)
db.Files.belongsTo(db.Users)
db.Records.belongsTo(db.Users)

module.exports = db
