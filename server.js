const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, "10.0.0.111", () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});