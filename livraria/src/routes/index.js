const express = require("express");
const router = express.Router();

const livrosRoutes = require("./livros.routes");

router.get("/", (req, res) => {
	res.status(200).json({
		mensagem: "Bem-vindo à API da Livraria! Use /livros para gerenciar os livros.",
	});
});

router.use("/livros", livrosRoutes);

module.exports = router;

