import Post from "../models/Post";

export const createPost = async (req, res) => {
    try{
        const { text } = req.body
        if(text) {
            const newPost = new Post({
                text,
            })
            newPost.save()
            return res.json(newPost)
        }
    }catch(err){
        console.log(err);
    }
}