const {CustomAPIError} = require('../Error/custom-error')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:`SOmething went wrong, try again later`})
}

module.exports = errorHandler