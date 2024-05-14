// *********************************** DOM TRAVERSING & MANIPULATION **************************************

/*
Il processo di modifica dei contenuti di una pagina HTML è composto da 2 fasi:
- DOM TRAVERSING: Ovvero selezione di un elemento della pagina)
- DOM MANIPULATION: Ovvero una volta selezionato posso modificarne le caratteristiche
*/

console.log("DOCUMENT: ", document)

// *********************************** DOM TRAVERSING ********************************

// 1. getElementById <-- TORNA O UN OGGETTO O NULL
const h1Element = document.getElementById("main-title")
console.log("Sto selezionando tramite id l'h1 della pagina: ", h1Element)

const footer = document.getElementById("footer")
console.log("FOOTER: ", footer)

const aCaso = document.getElementById("acaso") // l'id non esiste quindi sarà null
console.log("Elemento che non esiste è null:", aCaso)

// 2. getElementsByClassName <-- TORNA SEMPRE UN ARRAY!
const allArticles = document.getElementsByClassName("content")
console.log(allArticles) // <-- NON E' un singolo elemento ma una LISTA
console.log("Primo articolo:", allArticles[0])
console.log("Secondo articolo:", allArticles[1])

const elements = document.getElementsByClassName("asdasdas")
console.log(elements) // <-- Anche nel caso in cui non trovassimo risultati otterremmo comunque un array, sebbene vuoto

// 3. getElementsByTagName
const allLI = document.getElementsByTagName("li")
console.log(allLI)

const allAnchors = document.getElementsByTagName("a")
console.log(allAnchors)

const allBodies = document.getElementsByTagName("body")
console.log(allBodies)

// 4. querySelector & querySelectorAll. Permettono di selezionare elementi della pagina tramite selettori CSS

const pInsideArticles = document.querySelectorAll("article > p")
console.log(pInsideArticles) // querySelectorAll torna UN ARRAY

const pInsideArticles2 = document.querySelector("article > p")
console.log(pInsideArticles2) // querySelector torna il PRIMO OGGETTO CHE TROVA

// Quando seleziono un elemento, poi ho anche accesso al suo parent Element
const padre = pInsideArticles2.parentElement
const nonno = pInsideArticles2.parentElement.parentElement
console.log("Il padre di pInsideArticles2 è, ", padre)
console.log("Il nonno di pInsideArticles2 è, ", nonno)

// Quando seleziono un elemento, poi ho anche accesso ai suoi figli
console.log(document.getElementsByTagName("ul"))
console.log(document.getElementsByTagName("ul")[0])
console.log(document.getElementsByTagName("ul")[0].children)
console.log(document.getElementsByTagName("ul")[0].children[0])

// document.querySelector("#main-title") NO, meglio usare getElementById
// document.querySelectorAll(".content") NO, meglio usare getElementsByClassName
// Sebbene i query selector possano essere utilizzati per tutto, se abbiamo la necessità di selezionare tramite id o classe o tag, sarebbe meglio usare, per questioni di performance i vari getElement...

// const element = document.querySelector("article+p")
// console.log(element)
