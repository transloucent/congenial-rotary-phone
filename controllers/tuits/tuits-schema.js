import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    userName: String,
    handle: String,
    topic: String,
    image: String,
    time: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean
}, {collection: 'tuits'});

export default schema;