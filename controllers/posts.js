const { Post } = require("../models");

const index = async (req, res) => {
  try {
    const post = await Post.findAll();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id;
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const show = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    post.set(req.body);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  create,
  show,
  index,
  delete: deletePost,
  update,
};
