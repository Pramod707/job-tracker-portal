const jwt = require('jsonwebtoken')

const setToken = (user) => {
    try {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
        return token
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getUser=(token)=>{
    try{
        if(!token) return null
        return jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        console.log(err);
        return null
    }
}

module.exports={
    setToken,
    getUser
}