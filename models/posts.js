const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "貼文 ID 未填"]
    },
    content: {
      type: String,
      required: [true, "內容未填"]
    },
    image: {
      type: String,
      default: ""
    },
    likes: {
      type: Number,
      default: 0
    } 
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const Post = mongoose.model("posts", postSchema);

module.exports = Post;