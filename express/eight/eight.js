const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agriculture API",
      version: "1.0.0",
      description: "API for managing pesticides, fertilizers, and vehicle rentals",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;