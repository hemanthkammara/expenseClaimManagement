const express = require("express");
const { connection } = require("./db/database");
const { userRouter } = require("./routes/user.route");

require("dotenv").config();

const cors = require("cors");
const { ExpenseModel } = require("./models/expense.model");
const { auth } = require("./middlEwares/auth.middleware");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", userRouter);

app.post("/expense", auth, async (req, res) => {
  try {
    let expense = new ExpenseModel(req.body);
    console.log(expense);
    await expense.save();
    res.status(200).send({ msg: "success", expense: expense });
  } catch (error) {
    res.status(400).send({ msg: "error", error: error });
  }
});

app.get("/employee/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let expenses = await ExpenseModel.find({ userId: id });
    res.status(200).send({ msg: "success", expenses: expenses });
  } catch (error) {
    res.status(400).send({ msg: "error", error: error });
  }
});

app.get("/manager", async (req, res) => {
  try {
    let expenses = await ExpenseModel.find();
    res.status(200).send({ msg: "success", expenses: expenses });
  } catch (error) {
    res.status(400).send({ msg: "error", error: error });
  }
});


app.patch("/expense/:id",async(req,res)=>{
  console.log(req.params);
  const {id}=req.params
  
  try{
    await ExpenseModel.findByIdAndUpdate({_id:id},req.body);
    res.status(200).send({msg:"successfully updated"})
  }
  catch(err){
    res.status(400).send({ msg: "error", error: err });
  }
})

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected at 7000 and db is connected");
  } catch (error) {
    console.log(error);
  }
});
