const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Travel API Running");
});

const inquiryRoutes =
require("./routes/inquiryRoutes");

app.use(
"/api/inquiries",
inquiryRoutes
);

const authRoutes =
  require("./routes/authRoutes");

app.use(
  "/api/auth",
  authRoutes
);
const packageRoutes =
require("./routes/packageRoutes");

app.use(
"/api/packages",
packageRoutes
);

const paymentRoutes =
require("./routes/paymentRoutes");

app.use(
"/api/payments",
paymentRoutes
);

const userRoutes =
require("./routes/userRoutes");

const adminRoutes =
require("./routes/adminRoutes");

app.use(
"/api/user",
userRoutes
);

app.use(
"/api/admin",
adminRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});