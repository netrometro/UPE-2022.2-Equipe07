import express from "express";
const router = express.Router();

const {
    criarPostagem,
    buscarPostagemPorId,
    atualizarPostagem,
    deletarPostagem
} = require('../controller/postController');

router.post('/createpost', criarPostagem);
router.get('/:id', buscarPostagemPorId);
router.put('/:id', atualizarPostagem);
router.delete('/:id', deletarPostagem);

module.exports = router;