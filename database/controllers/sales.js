const {
  Sales,
  Products,
  Customers,
  Sellers,
  Categories,
  Subcategories,
  Files
} = require("../db");
const sales = {};
const sequelize = require("sequelize");

async function create(
  invoice,
  quanty,
  price,
  discount,
  return_,
  total_return,
  total_sale,
  total,
  product_id,
  customer_id,
  seller_id,
  date,
  file_id
) {
  const sale = await Sales.create({
    invoice,
    quanty,
    price,
    discount,
    return_,
    total_return,
    total_sale,
    total,
    product_id,
    customer_id,
    seller_id,
    date,
    file_id
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAll() {
  const sale = await Sales.findAll()
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllbetweenDate(start, end) {
  const sale = await Sales.findAll({
    where: {
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
    include: [
      {
        model: Products,
      },
      {
        model: Customers,
      },
      {
        model: Sellers,
      },
      {
        model: Files,
      }
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllBySellerBetweenDate(seller_id, start, end) {
  const sale = await Sales.findAll({
    where: {
      seller_id: seller_id,
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
    include: [
      {
        model: Products,
      },
      {
        model: Customers,
      },
      {
        model: Sellers,
      },
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllByCustomerBetweenDate(customer_id, start, end) {
  const sale = await Sales.findAll({
    attributes: [
      "customer_id",
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
    ],
    include: [
      {
        model: Customers,
        attributes: ["name"],
      },
    ],
    where: {
      customer_id: customer_id,
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
    group: ["customer_id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function customersSalesBetweenDate(start, end) {
  const sale = await Sales.findAll({
    attributes: [
      "customer_id",
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
    ],
    include: [
      {
        model: Customers,
        attributes: ["name"],
      },
    ],
    where: {
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
    group: ["customer_id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllByProductBetweenDate(product_id, start, end) {
  const sale = await Sales.findAll({
    where: {
      product_id: product_id,
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}



async function totalSalesBetweenDate(start, end) {
  const sale = await Sales.sum("total", {
    where: {
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function totalQuantyBetweenDate(start, end) {
  const sale = await Sales.sum("quanty", {
    where: {
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllSoldProductsBetweenDates(startDate, endDate) {
  const sale = await Sales.findAll({
    attributes: [
      "product_id",
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
    ],
    include: [
      {
        model: Products,
        attributes: ["name", "code"],
        include: [
          {
            model: Subcategories,
            attributes: ["name"],
            include: [
              {
                model: Categories,
                attributes: ["name"],
              },
            ],
          },
        ],
      },
    ],
    where: {
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
    group: ["product_id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllGroupByCategoryBetweenDates(startDate, endDate) {
  const sale = await Sales.findAll({
    attributes: [
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
      [
        sequelize.literal("`Product->Subcategory->Category`.`id`"),
        "category_id",
      ],
      [
        sequelize.literal("`Product->Subcategory->Category`.`name`"),
        "category_name",
      ],
    ],
    include: [
      {
        model: Products,
        attributes: [],
        include: [
          {
            model: Subcategories,
            attributes: [],
            include: [
              {
                model: Categories,
                attributes: [],
              },
            ],
          },
        ],
      },
    ],

    where: {
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
    raw: true,

    group: ["Product->Subcategory->Category.id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return sale;
}

async function findAllBySellerGroupByCategoryBetweenDate(
  seller_id,
  start,
  end
) {
  const sale = await Sales.findAll({
    attributes: [
      "seller_id",
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
      [
        sequelize.literal("`Product->Subcategory->Category`.`id`"),
        "category_id",
      ],
      [
        sequelize.literal("`Product->Subcategory->Category`.`name`"),
        "category_name",
      ],
    ],
    include: [
      {
        model: Products,
        attributes: [],
        include: [
          {
            model: Subcategories,
            attributes: [],
            include: [
              {
                model: Categories,
                attributes: [],
              },
            ],
          },
        ],
      },
    ],
    where: {
      seller_id: seller_id,
      date: {
        [sequelize.Op.between]: [start, end],
      },
    },
    raw: true,
    group: ["Product->Subcategory->Category.id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}


async function totalSalesByProductBetweenDates(product_id, startDate, endDate ) {
  const sale = await Sales.sum("total", {
    where: {
      product_id: product_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}

async function totalQuantyByProductBetweenDates(product_id,startDate, endDate ) {
  const sale = await Sales.sum("quanty", {
    where: {
      product_id: product_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}
async function findAllByProductBetweenDateGroupByDate(product_id, startDate, endDate) {
  const sale = await Sales.findAll({
    attributes: [
      "date",
      'product_id',
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
    ],
    where: {
      product_id: product_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
    group: ["date"],
    raw: true,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}


async function totalSalesByCustomerBetweenDates(customer_id, startDate, endDate ) {
  const sale = await Sales.sum("total", {
    where: {
      customer_id: customer_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}

async function totalQuantyByCustomerBetweenDates(customer_id,startDate, endDate ) {
  const sale = await Sales.sum("quanty", {
    where: {
      customer_id: customer_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}

async function findAllByCustomerBetweenDateGroupByDate(customer_id, startDate, endDate) {
  const sale = await Sales.findAll({
    attributes: [
      "date",
      'customer_id',
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
    ],
    where: {
      customer_id: customer_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
    group: ["date"],
    raw: true,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}


async function findAllByCustomerBetweenDateGroupByCategory(customer_id, startDate, endDate) {
  const sale = await Sales.findAll({
    attributes: [
      "customer_id",
      [sequelize.fn("sum", sequelize.col("quanty")), "total_quanty"],
      [sequelize.fn("sum", sequelize.col("total")), "total_sales"],
      [
        sequelize.literal("`Product->Subcategory->Category`.`id`"),
        "category_id",
      ],
      [
        sequelize.literal("`Product->Subcategory->Category`.`name`"),
        "category_name",
      ],
    ],
    include: [
      {
        model: Products,
        attributes: [],
        include: [
          {
            model: Subcategories,
            attributes: [],
            include: [
              {
                model: Categories,
                attributes: [],
              },
            ],
          },
        ],
      },
    ],
    where: {
      customer_id: customer_id,
      date: {
        [sequelize.Op.between]: [startDate, endDate],
      },
    },
    raw: true,
    group: ["Product->Subcategory->Category.id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}

const destroy = async (id) => {
  const sale = await Sales.destroy({
    where: { id: id },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}

async function destroyAllByFile(file_id) {
  const sale = await Sales.destroy({
    where: { file_id: file_id },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return sale;
}


sales.create = create;
sales.findAll = findAll;
sales.findAllbetweenDate = findAllbetweenDate;
sales.findAllBySellerBetweenDate = findAllBySellerBetweenDate;
sales.findAllByCustomerBetweenDate = findAllByCustomerBetweenDate;
sales.findAllByProductBetweenDate = findAllByProductBetweenDate;
sales.totalSalesBetweenDate = totalSalesBetweenDate;
sales.totalQuantyBetweenDate = totalQuantyBetweenDate;
sales.findAllSoldProductsBetweenDates = findAllSoldProductsBetweenDates;
sales.customersSalesBetweenDate = customersSalesBetweenDate;
sales.findAllGroupByCategoryBetweenDates = findAllGroupByCategoryBetweenDates;
sales.findAllBySellerGroupByCategoryBetweenDate =findAllBySellerGroupByCategoryBetweenDate;
sales.totalSalesByProductBetweenDates = totalSalesByProductBetweenDates;
sales.totalQuantyByProductBetweenDates = totalQuantyByProductBetweenDates;
sales.findAllByProductBetweenDateGroupByDate = findAllByProductBetweenDateGroupByDate;
sales.totalSalesByCustomerBetweenDates = totalSalesByCustomerBetweenDates;
sales.totalQuantyByCustomerBetweenDates = totalQuantyByCustomerBetweenDates;
sales.findAllByCustomerBetweenDateGroupByDate = findAllByCustomerBetweenDateGroupByDate;
sales.findAllByCustomerBetweenDateGroupByCategory = findAllByCustomerBetweenDateGroupByCategory;
sales.destroy = destroy;
sales.destroyAllByFile = destroyAllByFile;

module.exports = sales;
