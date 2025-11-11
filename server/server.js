// Import library express
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Data sementara (simulasi database)
let items = [
  { id: 1, nama: "Pensil", harga: 2000 },
  { id: 2, nama: "Buku", harga: 5000 }
];

// ✅ GET - Menampilkan semua data
app.get('/items', (req, res) => {
  res.json(items);
});

// ✅ POST - Menambah data baru
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    nama: req.body.nama,
    harga: req.body.harga
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// ✅ PUT - Mengubah data berdasarkan id
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Item tidak ditemukan" });

  item.nama = req.body.nama;
  item.harga = req.body.harga;
  res.json(item);
});

// ✅ DELETE - Menghapus data berdasarkan id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(i => i.id !== id);
  res.json({ message: "Item dihapus" });
});

// Jalankan server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
