creativerse-backend/│
├── src/
│   ├── config/
│   │   ├── db.js                  # Koneksi MongoDB
│   │   └── cloudinary.js          # Konfigurasi upload gambar (opsional)
│   │
│   ├── models/
│   │   ├── User.js                # Schema pengguna
│   │   ├── Post.js                # Schema postingan
│   │   ├── Comment.js             # Schema komentar
│   │   ├── Stream.js              # Schema streaming
│   │   ├── Message.js             # Schema pesan/chat
│   │   └── CoinTransaction.js     # Schema transaksi / koin Klikkers
│   │
│   ├── controllers/
│   │   ├── authController.js      # Login, register, reset password
│   │   ├── userController.js      # Profil, edit profil, notifikasi
│   │   ├── postController.js      # CRUD postingan
│   │   ├── streamController.js    # Streaming rekomendasi, join room
│   │   ├── messageController.js   # Chat antar pengguna
│   │   ├── coinController.js      # Kelola koin Klikkers
│   │   └── notificationController.js # Push notifikasi
│   │
│   ├── routes/ 
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── postRoutes.js
│   │   ├── streamRoutes.js
│   │   ├── messageRoutes.js
│   │   ├── coinRoutes.js
│   │   └── notificationRoutes.js
│   │
│   ├── middlewares/ 
│   │   ├── authMiddleware.js      # JWT auth
│   │   ├── errorMiddleware.js     # Error handler
│   │   └── uploadMiddleware.js    # Upload file (gambar/avatar)
│   │
│   ├── services/ 
│   │   ├── mailService.js         # Kirim email (verifikasi, notifikasi)
│   │   ├── coinService.js         # Logika perhitungan & reward koin
│   │   └── notificationService.js # Pengiriman notifikasi
│   │
│   ├── utils/ 
│   │   ├── generateToken.js       # JWT token generator
│   │   ├── responseFormatter.js   # Format respons API
│   │   └── constants.js           # Nilai konstan (roles, limits, dsb)
│   │
│   ├── app.js                     # Setup express app
│   └── server.js                  # Entry point server
│
├── .env                           # Variabel lingkungan (DB_URI, JWT_SECRET, CLOUD_KEY)
├── .gitignore
├── package.json
└── README.md
