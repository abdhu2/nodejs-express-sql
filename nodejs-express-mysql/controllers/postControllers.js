import Tutorial from "../model/postModel.js";

const getAllPosts = async (req, res, next) => {
  res.send("Get All Posts");
};

// const createNewPost = async (req, res, next) => {
//   const { title, description } = req.body;
//   const postModel = new postModel(title, description);

//   postModel = await postModel.save();

//   console.log(postModel);
//   res.send(" Create New Post");
// };

const createNewPost = async (req, res, next) => {
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
  });
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else res.send(data);
  });
};

const getPostById = async (req, res, next) => {
  res.send("Find Post By Id");
};

export default { getAllPosts, createNewPost, getPostById };
