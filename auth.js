function getUser(token) {
    if(!token) return null;
    try {
    return jwt.verify(token,process.env.secret);
    } catch (error) {
        return null;
    }
    
  }const validation=asyncHandler(async(req,res,next)=>{
    let token;
    let authheader=req.headers.Authorization || req.headers.authorization
    if(authheader &&authheader.startsWith("Bearer")){
        token=authheader.split(" ")[1];
        if(!token){
            res.status(401);
            throw new Error("Anuthrised User");
        }
        jwt.verify(token,process.env.secret,(err,decode)=>{
            if(err){
                res.status(401)
                throw new Error("Anauthrised user")
            }
            req.user=decode;
            next();
    
        })
        
    }
    // res.status(400).json("Invalid token");
    });