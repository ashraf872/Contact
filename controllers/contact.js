exports.addUSer =()=>{
    appRouter.get('/',async(req,res) =>{
        try {
            const  contacts = contactSchema.find();
            await newContact.save();
            res.status(200).send({msg:'found it  successuflly'})
            
        } catch (error) {
            res.status(500).send({msg :"failed"})
        }
    })
}

exports.deleteUser = ()=>{
    appRouter.delete('/:id',async(req,res)=>{
        try {
            const  {id} = req.params;
            const deleteUser =  await contactSchema.findByIdAndDelete(id);
            res.status(200).send({msg:'connect successuflly'})
            
        } catch (error) {
            res.status(500).send({msg :"failed"})
        }
    })
}