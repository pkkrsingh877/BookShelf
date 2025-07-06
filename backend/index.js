import express from 'express';
const app = express();

// Polyfilling __dirname and __filename in ES Modules
// Getting file path context in ES modules
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import 'dotenv/config';

// Serve the built React app from /frontend/dist
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// For unknown routes
app.get('/:catchall', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(5000, () => {
    console.log(`App is running at port ${process.env.PORT}`)
});