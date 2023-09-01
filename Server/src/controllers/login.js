const users = require("../utils/users")

const login = (req,res)=>{
    const {email,password} = req.query
    if(users.find(obj=> obj.email === email && obj.password === password)){
        return res.status(200).json({access:true})
    }
    return res.status(404).json({access:false})

}

module.exports = {
    login
}