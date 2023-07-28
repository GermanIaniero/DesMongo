const productsController = require("../controllers/local/product/controller.products");
const cartsController = require("../controllers/local/cart/controller.carts");
const viewsControllerAsinc = require("../controllers/views/controller.views");
const viewsControllerSinc = require("../controllers/views/controller.viewsSinc");
const productsRemoteController = require("../controllers/remote/product/controller.products");
const cartsRemoteController = require("../controllers/remote/cart/controller.carts")
const chatController = require("../controllers/views/chat/controller.chats")

const router = (app) => {
  app.use("/api/remote/products", productsRemoteController);
  app.use("/api/remote/carts", cartsRemoteController);
  app.use("/", viewsControllerAsinc);
  app.use("/realTimeProducts", viewsControllerSinc);
  app.use("/api/local/products", productsController);
  app.use("/api/local/carts", cartsController);
  app.use("/chat", chatController)
};

module.exports = router;