function Judul(){
  let namaJudul = prompt("Ketik judul quote")
  alert(`Judul quote: ${namaJudul}.`)
  document.getElementById("judul").innerHTML = `${namaJudul}.`
}

function Quote(){
  let namaQuote = prompt("Ketik quote")
  alert(`Quote: ${namaQuote}`)
  document.getElementById("quote").innerHTML = `"${namaQuote}"`
}

function Black(){
  document.body.style.backgroundColor = '#000000'
  document.body.style.color = '#ffffff'
}

function White(){
  document.body.style.backgroundColor = '#ffffff'
  document.body.style.color = '#000000'
}