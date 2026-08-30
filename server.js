const express = require("express");
const lootRoutes = require("./routes/loot.routes");

const app = express();
app.use(express.json());

app.use("/loot", lootRoutes);

app.listen(3000, () => {
    console.log("LootVault corriendo en el puerto 3000");
});
