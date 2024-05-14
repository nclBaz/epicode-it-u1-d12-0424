// *********************************** DOM TRAVERSING & MANIPULATION **************************************

/*
Il processo di modifica dei contenuti di una pagina HTML è composto da 2 fasi:
- DOM TRAVERSING: Ovvero selezione di un elemento della pagina)
- DOM MANIPULATION: Ovvero una volta selezionato posso modificarne le caratteristiche
*/

console.log("DOCUMENT: ", document)

// *********************************** DOM TRAVERSING ********************************
const h1Element = document.getElementById("main-title")
console.log("Sto selezionando tramite id l'h1 della pagina: ", h1Element)

const footer = document.getElementById("footer")
console.log("FOOTER: ", footer)

const aCaso = document.getElementById("acaso")
console.log("Elemento che non esiste è null:", aCaso)
