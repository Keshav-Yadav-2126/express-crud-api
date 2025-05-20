const fs = require("fs");
const data = require("../MOCK_DATA.json");
const {v4: uuidv4} = require("uuid");

const updateUser = (req,res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    const userInfo = data.findIndex(user => userId == user.id);

    if (userInfo === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    data[userInfo] = {...updatedUser, id: `${data[userInfo].id? data[userInfo].id : uuidv4()}`}
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err)=>{
        if (err) {
           return res.status(500).json({err: "data is not updated"}) 
        }
        return res.json({status: "updated"})
    })
}

module.exports = { updateUser }