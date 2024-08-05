const Amenty  = require('../../models/Amenty')


const getAmentyList = async(req,res,next)=>{

try {
    
const list = await Amenty.find()

res.status(200).json({message:'success',status:true,list:list})

} catch (error) {
    next(error)
}


}

module.exports = getAmentyList