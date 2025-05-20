const data = require("../MOCK_DATA.json")
const allUser = (req,res) =>{
    res.send(data)
}

module.exports = { allUser };