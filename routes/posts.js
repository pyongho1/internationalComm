const router = require("express").Router();
const postsCtrl = require("../controllers/posts.js");
const middleware = require("../middleware/auth.js");

const { decodeUserFromToken, checkAuth } = middleware;

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
router.get("/", postsCtrl.index);
router.get("/:id", postsCtrl.show);
router.post("/", postsCtrl.create);

module.exports = router;
