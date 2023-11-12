module.exports = app => {
  const customerController = require("../controllers/customer.controller.js");

  const router = require("express").Router();

  // Create a new Book
  router.post("/", customerController.create);

  // Retrieve all Books
  router.get("/", customerController.findAll);

  // Retrieve all published Books
  router.get("/valid", customerController.findAllPublished);

  // Retrieve a single Book with id
  router.get("/:id", customerController.findOne);

  // Update a Book with id
  router.put("/:id", customerController.update);

  // Delete a Book with id
  router.delete("/:id", customerController.delete);

  // Delete all Books
  router.delete("/", customerController.deleteAll);

  app.use("/api/customers", router);
};
