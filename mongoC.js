import { MongoClient } from "mongodb";


const connectionString = "mongodb+srv://chimdi247:sGalrb4UZK2LWasV@mern-auth.rbx23t7.mongodb.net/Mern-cicd-ec2?retryWrites=true&w=majority" ; // cluster url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
