const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/users';

// Middleware untuk parsing JSON dari body request
app.use(express.json());

// --- Rute CREATE (POST) ---
app.post('/users', async (req, res) => {
    try {
        const newUser = req.body; // Data user baru dari Postman
        
        // Kirim permintaan POST ke JSONPlaceholder
        const response = await axios.post(JSON_PLACEHOLDER_URL, newUser);

        // JSONPlaceholder akan merespons dengan user yang dibuat (dengan ID baru)
        res.status(201).json({
            message: "Simulasi User berhasil dibuat",
            data: response.data,
            catatan: "JSONPlaceholder tidak benar-benar menyimpan perubahan."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal membuat user' });
    }
});

// --- Rute DELETE ---
app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Ambil ID user dari URL

        // Kirim permintaan DELETE ke JSONPlaceholder
        await axios.delete(`${JSON_PLACEHOLDER_URL}/${userId}`);

        // JSONPlaceholder merespons 200 OK atau 204 No Content untuk DELETE yang sukses
        res.status(200).json({
            message: `Simulasi User dengan ID ${userId} berhasil dihapus`,
            catatan: "JSONPlaceholder tidak benar-benar menyimpan perubahan."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal menghapus user' });
    }
});

// --- Rute GET (Opsional, untuk pengecekan) ---
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(JSON_PLACEHOLDER_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data user' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});