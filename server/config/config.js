const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const url = "mongodb+srv://ayush890:ILIKEMANGO@cluster0.vcx1aql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // exit process if DB connection fails
  }
};

module.exports = connectDB;
