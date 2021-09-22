const express = require('express');
const postMoodule = require('../models/db');

const router = express.Router();

router.get('/', async(req, res) =>{
    try{
        const getData = postMoodule.find();
        res.json(getData);
    }catch(err){
        res.json({msg : err});
    }
});

router.post('/', async(req, res)=>{
    const postData = new postMoodule({
        name : req.body.name,
        image : req.body.image,
        summary : req.body.summary
    });
    try{
        const savedPost = await postData.save();
        res.json(savedPost);
    }catch(err){
        console.log(err);
    }
});

router.patch('/:postId', async(req, res) => {
    try{
        const updatePost = postMoodule.updateOne({_id : req.params.postId});
        res.json(updatePost);
    }catch(err){
        res.json({msg : err})
    }
})

router.get('/:postId', async(req, res) => {
    try{
        const getOnePost = postMoodule.findById({_id : req.params.postId});
        res.json(getOnePost);
    }catch(err){
        res.json({msg : err})
    }
})

router.delete('/:postId', async(req, res) => {
    try{
        const deletePost = postMoodule.remove({_id : req.params.postId});
        res.json(deletePost);
    }catch(err){
        res.json({msg : err})
    }
})


module.exports = router;