document.addEventListener("DOMContentLoaded", () => {
  const btnCrea = document.getElementById("creaArticolo");
  const inputTitolo = document.getElementById("titolo");
  const textareaContenuto = document.getElementById("contenuto");
  const contenitoreArticoli = document.getElementById("articoliCreati");

  btnCrea.addEventListener("click", () => {
    const titolo = inputTitolo.value.trim();
    const testo = textareaContenuto.value.trim();

    if (titolo === "" || testo === "") {
      alert("⚠️ Inserisci sia il titolo che il paragrafo.");
      return;
    }

    const date = new Date();
    const formatDate = date.toLocaleDateString();

    // Crea articolo
    const articolo = document.createElement("article");
    articolo.innerHTML = `
      <h2>${titolo}</h2>
      <p>${testo}</p>
      <small>Pubblicato il: ${formatDate}</small>
    `;

    contenitoreArticoli.prepend(articolo);

    // Pulisci input
    inputTitolo.value = "";
    textareaContenuto.value = "";
  });
});
