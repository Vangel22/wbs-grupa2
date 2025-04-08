const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  // avtor na postot
  user_id: {
    immutable: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
  },
  title: String,
  content: String,
});

const PostsModel = mongoose.model("Post", postSchema, "posts");

// site postovi za korisnikot koj gi ima napraveno
const getAll = async (id) => {
  return await PostsModel.find({ user_id: id });
  // Pronajdi gi site postovi kade user_id e id-to sto e isprateno
};

const getSingle = async (id) => {
  return await PostsModel.findOne({ _id: id });
};

const create = async (data) => {
  const post = new PostsModel(data);
  return await post.save();
};

const update = async (id, data) => {
  return await PostsModel.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await PostsModel.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getSingle,
  create,
  update,
  remove,
};
