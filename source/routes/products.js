const express = require('express');
const { renderUploadProductViews } = require('../controllers/product');
const router = express.Router();

//importacion de la logica que esta en el controllers
router.get('/cargar-producto', renderUploadProductViews);

module.exports = router;