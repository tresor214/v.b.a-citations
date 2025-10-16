const citations = [
  "Le succès est un voyage, pas une destination.",
  "N’attends pas le moment parfait, saisis le moment et rends-le parfait.",
  "La persévérance est la clé du succès.",
  "Fais-le avec passion ou pas du tout.",
  "Chaque jour est une nouvelle chance de faire mieux."
];

function generateQuote() {
  const index = Math.floor(Math.random() * citations.length);
  document.getElementById("quote").textContent = citations[index];
}