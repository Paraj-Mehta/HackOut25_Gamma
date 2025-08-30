const User = require("../models/User.js");

module.exports.add = async(req,res)=>{
    try {
        const {email} = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            console.log(userExists);
            return res.status(400).json({message:"User already exists."})
        }

        const newUser = new User(req.body);
        await newUser.save()
        res.status(200).json({message: "New user created"})

    } catch (error) {
        res.status(500).json({errorMessage : error.message});
    }
}

module.exports.getUser = async(req, res)=>{
  try {
    const { email } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful", user });

  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
