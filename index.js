// Import library Express
const express = require('express');
const app = express();
const port = 3001; // port bebas, tapi 3001 umum dipakai

// Middleware agar bisa baca JSON dari request body
app.use(express.json());

// Data sementara (anggap seperti database sementara)
let items = [
  { id: 1, nama: "Pensil", harga: 2000 },
  { id: 2, nama: "Buku", harga: 5000 }
];

// ====== ROUTES (CRUD) ======

// A. Route dasar untuk cek server
app.get('/', (req, res) => {
  res.send('API CRUD Tugas 6 Berjalan ✅');
});

// B. READ - Tampilkan semua data
app.get('/items', (req, res) => {
  res.json(items);
});

// C. READ - Tampilkan 1 data berdasarkan ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ pesan: 'Data tidak ditemukan' });
  }
  res.json(item);
});

// D. CREATE - Tambah data baru
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    nama: req.body.nama,
    harga: req.body.harga
  };
  items.push(newItem);
  res.status(201).json({ pesan: 'Data berhasil ditambahkan', data: newItem });
});

// E. UPDATE - Ubah data berdasarkan ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ pesan: 'Data tidak ditemukan' });
  }

  item.nama = req.body.nama;
  item.harga = req.body.harga;
  res.json({ pesan: 'Data berhasil diupdate', data: item });
});

// F. DELETE - Hapus data berdasarkan ID
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ pesan: 'Data tidak ditemukan' });
  }

  items.splice(index, 1);
  res.json({ pesan: 'Data berhasil dihapus' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
