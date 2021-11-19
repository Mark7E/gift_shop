const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "store"

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));


require("./config/mongoose.config")(DB);

require("./routes/Product.routes")(app);

app.listen(PORT, () => console.log(`The Server is up and running on port: ${PORT}`))