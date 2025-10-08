const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "creativerse_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

// JWT secret key (for token signing)
const JWT_SECRET = "your_secret_key";

// User Registration
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user exists
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (result.length > 0) return res.status(400).send("User already exists!");

    // Hash password and store in DB
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).send("Error registering user");
        res.status(201).send("User registered successfully");
      }
    );
  });
});

// User Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (result.length === 0) return res.status(400).send("User not found!");

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) return res.status(400).send("Invalid credentials");

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
});

// Protect Routes with JWT
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).send("Invalid token");
    req.userId = decoded.userId;
    next();
  });
}

// Create Post
app.post("/api/posts", verifyToken, (req, res) => {
  const { content, image_url } = req.body;

  db.query(
    "INSERT INTO posts (user_id, content, image_url) VALUES (?, ?, ?)",
    [req.userId, content, image_url],
    (err, result) => {
      if (err) return res.status(500).send("Error creating post");
      res.status(201).send("Post created successfully");
    }
  );
});

// Get User Posts
app.get("/api/posts", verifyToken, (req, res) => {
  db.query(
    "SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC",
    [req.userId],
    (err, result) => {
      if (err) return res.status(500).send("Error fetching posts");
      res.json(result);
    }
  );
});

// Get Klickers (Virtual Currency) Balance
app.get("/api/klickers", verifyToken, (req, res) => {
  db.query("SELECT * FROM klickers WHERE user_id = ?", [req.userId], (err, result) => {
    if (err) return res.status(500).send("Error fetching Klickers");
    res.json(result);
  });
});

// Edit Profile
app.put("/api/profile", verifyToken, (req, res) => {
  const { username, profile_picture } = req.body;

  db.query(
    "UPDATE users SET username = ?, profile_picture = ? WHERE id = ?",
    [username, profile_picture, req.userId],
    (err, result) => {
      if (err) return res.status(500).send("Error updating profile");
      res.send("Profile updated successfully");
    }
  );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
