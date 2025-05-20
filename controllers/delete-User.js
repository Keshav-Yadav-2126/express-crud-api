const fs = require("fs");
const data = require("../MOCK_DATA.json");

const deleteUser = (req, res) => {
    const userId = req.params.id;

    const userExists = data.some(user => user.id === userId);

    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }

    const updatedData = data.filter(user => user.id !== userId);

    if (!updatedData) {
        res.status(500).json({ message: "user not found" });
    }

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updatedData), (err) => {
        if (err) {
            return res.status(500).json({ message: "Data not deleted" });
        }
        return res.json({ message: "User deleted" });
    });
}

module.exports = { deleteUser }