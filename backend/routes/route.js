const express = require("express");

const {
  getAllUsers,
  
  loginController,
  registerController,
} = require("../controllers/userController");

const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
   userBlogControlller
} = require("../controllers/blogController");

const router = express.Router();


// USER API'S

//router object


// GET ALL USERS || GET
//router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerController);
router.get("/all-users", getAllUsers)
router.post("/login", loginController);

//LOGIN || POST
//router.post("/login", loginController);

//blog API's

router.get("/all-blog", getAllBlogsController);// get All Blogs/Fetch
 router.post("/create-blog", createBlogController);//create blog
 router.put("/update-blog/:id", updateBlogController);//update by id
 router.get("/get-blog/:id", getBlogByIdController);//get by id
router.delete("/delete-blog/:id", deleteBlogController);//delete by id
 router.get("/user-blog/:id", userBlogControlller);

module.exports = router;
