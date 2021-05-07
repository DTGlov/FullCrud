import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    details: String,
    creator: String,
    tags: [String],
    createdAt:{
    type: Date,
        default:Date.now
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;