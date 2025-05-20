const fs = require("fs");
const data = require("../MOCK_DATA.json");
const {v4: uuidv4} = require("uuid");

const addUser = (req,res) =>{
    const userInfo = req.body;
    data.push({...userInfo, id: uuidv4()})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data) ,(err)=>{
        return res.json(userInfo)
    });
}

module.exports = {addUser}