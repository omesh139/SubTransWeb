
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const upload = multer({ dest: 'subtitles/' });
const PORT = 3000;

// API Handlers
const handleTranslate = require('./api/translate');
const handleGenerate = require('./api/generate');

app.use(cors());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/translate', upload.single('subtitle'), handleTranslate);
app.get('/api/generate', handleGenerate);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
