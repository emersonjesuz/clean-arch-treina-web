import express from "express";
import { ExpressAdapter } from "./adpters/express.adpter";
import { ClientFactory } from "./factories/client.factory";

const app = express();
app.use(express.json());

app.get(
  "/api/clients",
  ExpressAdapter.adapt(ClientFactory.getFindAllClientsController())
);
app.post(
  "/api/clients",
  ExpressAdapter.adapt(ClientFactory.getCreateClientController())
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
