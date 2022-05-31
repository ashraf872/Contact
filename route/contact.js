const express = require('express');

const appRouter = express.Router();
const contactSchema = require('../model/contact');
//get users
appRouter.get('/',async(req,res) =>{
    try {
        const  contacts = contactSchema.find();
        await newContact.save();
        res.status(200).send({msg:'found it  successuflly'})
        
    } catch (error) {
        res.status(500).send({msg :"failed"})
    }
})

//send users
appRouter.post('/',async(req,res)=>{
    try {
        const  newContact = new contactSchema(req.body);
        await newContact.save();
        res.status(200).send({msg:'connect successuflly'})
        
    } catch (error) {
        res.status(500).send({msg :"failed"})
    }
})
module.exports = appRouter;

//update users

appRouter.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const  user = await contactSchema.findByIdAndUpdate(id,{$set : {...req.body}})
        await newContact.save();
        res.status(200).send({msg:'connect successuflly'})
        
    } catch (error) {
        res.status(500).send({msg :"failed"})
    }
})
module.exports = appRouter;

//delete user

appRouter.delete('/:id',async(req,res)=>{
    try {
        const  {id} = req.params;
        const deleteUser =  await contactSchema.findByIdAndDelete(id);
        res.status(200).send({msg:'connect successuflly'})
        
    } catch (error) {
        res.status(500).send({msg :"failed"})
    }
})
module.exports = appRouter;

//get unique user
appRouter.get('/:id',async(req,res)=>{
    try {
        const  {id} = req.params;
        const user =  await contactSchema.findById(id);
        res.status(200).send({msg:'connect successuflly'})
        
    } catch (error) {
        res.status(500).send({msg :"failed"})
    }
})
module.exports = appRouter;