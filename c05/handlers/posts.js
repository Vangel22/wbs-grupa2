const validateSchema = require("../helper/validateSchema");
const { getAll, create, getSingle, update, remove } = require("../models/blog");
const { BlogCreate, BlogUpdate } = require("../models/blog/validate");

const getAllPosts = async (req, res) => {
  try {
    const data = await getAll(req.auth.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send("Invalid Server Error!");
  }
};

const createPost = async (req, res) => {
  try {
    const data = {
      ...req.body, // title, content
      user_id: req.auth.id,
    };

    await validateSchema(data, BlogCreate);
    const newPost = await create(data);

    return res.status(200).send(newPost);
  } catch (err) {
    return res.status(500).send("Invalid Server Error!");
  }
};

const updatePost = async (req, res) => {
  try {
    await validateSchema(req.body, BlogUpdate);

    const checkPost = await getSingle(req.params.id);

    if (!checkPost) {
      return res.status(400).send("Post not found!");
    }

    if (checkPost.user_id.toString() !== req.auth.id.toString()) {
      return res.status(400).send("User is not owner of this post!");
    }

    const updatedPost = await update(req.params.id, req.body);

    return res.status(200).send(updatedPost);
  } catch (err) {
    return res.status(500).send("Invalid Server Error!");
  }
};

const removePost = async (req, res) => {
  try {
    const checkPost = await getSingle(req.params.id);
    if (!checkPost) {
      return res.status(400).send("Post not found!");
    }

    if (checkPost.user_id.toString() !== req.auth.id.toString()) {
      return res.status(400).send("User is not owner of this post!");
    }

    const removedPost = await remove(req.params.id);

    return res.status(200).send(removedPost);
  } catch (err) {
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
};
