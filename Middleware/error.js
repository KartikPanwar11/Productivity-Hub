const error = (req,res)=>{
    res.status(404).send('Route is not found')
}

module.exports = error