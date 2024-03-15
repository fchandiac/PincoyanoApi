const express = require("express");
const router = express.Router();
const files = require("../database/controllers/files");

router.post("/files/upload", files.upload.single("file"), async (req, res) => {
  const { name, description, user_id } = req.body;
  const fileName = req.file.originalname;

  try {
    const result = await files.create(name, description, user_id, fileName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
});

router.get("/files/findAll", async (req, res) => {
  const file = await files.findAll();
  res.json(file);
});

router.post("/files/checkFileExists", async (req, res) => {
    const { filename } = req.body;
    try{
        const result = await files.checkFileExists(filename);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
    }
})

router.post("/files/deleteFile", async (req, res) => {
    const { filename } = req.body;
    try {
        const result = await files.deleteFile(filename);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
    }
})

router.post("/files/destroy", async (req, res) => {
    const { id } = req.body;
    try {
        const result = await files.destroy(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud" });
    }
})


  
    
    

module.exports = router;
