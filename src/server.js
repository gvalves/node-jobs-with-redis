import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";
import * as BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

const app = express();
BullBoard.setQueues(
  Queue.queues.map((queue) => new BullBoard.BullAdapter(queue.bull))
);

app.use(express.json());
app.use("/admin/queues", BullBoard.router);

app.post("/users", UserController.store);

app.listen(3333, () => {
  console.log("Server running on localhost:3333");
});
