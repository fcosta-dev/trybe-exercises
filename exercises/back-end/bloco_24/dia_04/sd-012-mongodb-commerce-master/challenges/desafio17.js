// 1 - Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.
db.produtos.createIndex({ descricao: "text" });

// 2 - Crie uma query que retorne a quantidade de documentos que contêm as palavras frango ou hamburguer utilizando o operador $text.
db.produtos.count(
  {
    $text: { $search: "frango hambúrguer" },
  },
);
