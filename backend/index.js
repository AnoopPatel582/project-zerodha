require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


// const holdingsData = require("../dashboard/src/data/data.js");
const { HoldingModel } = require("../backend/models/HoldingModel.js");

// const positionData=require("../dashboard/src/data/data.js");
const { PositionModel } = require("../backend/models/PositionModel.js");
const { OrderModel } = require("./models/OrderModel.js")

const PORT = process.env.PORT || 3001;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("App started!");
})
app.get("/home", async (req, res) => {
  res.send("This is home route.");
})

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
})
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
})
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
})

//connecting with database
// mongoose.connect(URL);
main()
  .then(() => {
    console.log("Connected to DB");
    // return initDB();
  })
  .catch((err) => {
    console.log(err);
  })
//it is used while initialising the data
//   .finally(() => { 
//     mongoose.connection.close();
//   });

async function main() {
  await mongoose.connect(URL);
}

//Inserting Hodling Data to mongo_db
// const initDB = async () => {
//   await HoldingModel.deleteMany({});
//   await HoldingModel.insertMany(holdingsData);
//   console.log("Holdings data was initialized");
// };

//Inserting Position Data to mongo_db
// const initDB= async()=>{
//     await PositionModel.deleteMany({});
//     await PositionModel.insertMany(positionData);
//     console.log("Position data was initialized");
// }