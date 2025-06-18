function creaArticolo() {
  const titoloInput = document.getElementById('titolo')
  const contenutoInput = document.getElementById('contenuto')
  const titolo = titoloInput.value.trim()
  const contenuto = contenutoInput.value.trim()
  const messaggio = document.getElementById('messaggio-successo')

  if (titolo === '' || contenuto === '') {
    alert('Attenzione: inserisci sia il titolo che il paragrafo.')
    return
  }

  const date = new Date()
  const formatDate = date.toLocaleDateString()

  const divArticolo = document.createElement('div')
  divArticolo.classList.add('articolo')

  const h2 = document.createElement('h2')
  h2.textContent = titolo

  const data = document.createElement('p')
  data.classList.add('data')
  data.textContent = `Data di pubblicazione: ${formatDate}`

  const p = document.createElement('p')
  p.textContent = contenuto

  divArticolo.appendChild(h2)
  divArticolo.appendChild(data)
  divArticolo.appendChild(p)

  document.getElementById('articoli').appendChild(divArticolo)

  // Pulisce i campi
  titoloInput.value = ''
  contenutoInput.value = ''

  // Mostra messaggio successo
  messaggio.textContent = '✅ Articolo pubblicato con successo!'
  messaggio.style.display = 'block'
  setTimeout(() => {
    messaggio.style.opacity = '1'
  }, 10)

  setTimeout(() => {
    messaggio.style.opacity = '0'
    setTimeout(() => {
      messaggio.style.display = 'none'
      messaggio.textContent = ''
    }, 500)
  }, 3000)
}
