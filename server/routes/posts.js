import { Router } from "express";
import mongoose from "mongoose";
import Post from "../models/Post.js";
const router = new Router();


// Create post

router.post("/createpost", async (req, res) => {
  try {
    const { text } = req.body;
    if (text) {
      const newPost = new Post({
        text,
      });

      await newPost.save();
      return res.json({
        newPost,
        message: "Добавилась",
      });
    }
  } catch (err) {
    res.json({ message: "Ошибка" });
  }
});

// Get post

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find();
    if (!allPosts) res.json({ message: "нет постов" });
    res.json({ allPosts, message: "посты" });
  } catch (err) {
    res.json({ message: "Ошибка" });
  }
});

// Delete post

router.delete("/:id", async (req, res) => {
  try {
    Post.findOneAndDelete({ id: req.params.id }).then(result => {
      res.status(200).json({
          message: 'Удален'
      })
  }).catch(err => res.json({message:"Такой нету"}))
  } catch (error) {
    res.json({ message: "Ошибка" });
  }
});


// Update post 

router.put('/:id', async (req, res) => {
  try {
      const { text, id } = req.body
      const update = { text: text };
      let doc = await Post.findOne({id:id});
      await Post.updateOne({id:id}, update);
      await doc.save();
      res.json({ message: 'Успешно' })

  } catch (error) {
      res.json({ message: 'Что-то пошло не так.' })
  }
})
export default router;
