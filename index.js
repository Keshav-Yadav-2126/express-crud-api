const express = require("express");
const data = require("./MOCK_DATA.json");
const { v4: uuidv4 } = require("uuid");

const { allRoutes } = require("./routes/all-users.js");
const { deleteRoutes } = require("./routes/delete-user.js");
const { updateRoutes } = require("./routes/update-user.js"); // ✅ fix
const { addRoute } = require("./routes/post-user.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${data.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>  
  `;
  res.send(html);
});

app.use("/", allRoutes);
app.use("/", addRoute);
app.use("/", deleteRoutes);   // ✅ correct
app.use("/", updateRoutes);   // ✅ correct

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = data.filter(user => id == user.id);
  res.send(user);
});

app.listen(8000, () => {
  console.log("server is up at 8000");
});
