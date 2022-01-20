const app = require("./app");
const cloudinary = require("cloudinary");
const dbConnect = require("./config/db/conn");
require("dotenv").config({ path: "backend/config/config.env" });

const port = 4000;
// connect to the  Database
dbConnect();

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

const server = app.listen(process.env.PORT || port, () => {
  console.log(
    `server is working at http://localhost:${port || process.env.PORT}`
  );
});
 
// Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
