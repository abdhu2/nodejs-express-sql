const getAllPosts = async (req, res, next) => {
  res.send("Get All Posts");
};

const createNewPost = async (req, res, next) => {
  res.send(" Create New Post");
};

const getPostById = async (req, res, next) => {
  res.send("Find Post By Id");
};

export default { getAllPosts, createNewPost, getPostById };
