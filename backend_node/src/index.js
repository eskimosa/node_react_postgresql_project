import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoutes.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", clientRoutes);

app.listen(port, () => {
  console.log("Listening on port 3001");
});
