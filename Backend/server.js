import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();

const PORT = process.env.PORT || 3000;

const currentFile = fileURLToPath(import.meta.url);
const currentFolder = dirname(currentFile);

const frontendPath = path.join(currentFolder, "../Frontend/build");

app.use(express.static(frontendPath));

app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});