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

// *********************************** DOM MANIPULATION ********************************
const titleOfThePage = document.getElementsByTagName("h1")[0]
console.log("Elemento h1:", titleOfThePage)
// Leggere il testo contenuto nell'h1
console.log("Testo dentro h1:", titleOfThePage.innerText)
// Scrivere nuovo testo dentro l'h1?
titleOfThePage.innerText = titleOfThePage.innerText + "CIAO A TUTTI" // <-- DOM MANIPULATION

const firstParagraph = document.querySelector("article>p")
firstParagraph.classList.add("nuova-classe") // Posso anche aggiungere nuove classi agli elementi
console.log(firstParagraph)

const paragraphsList = document.querySelectorAll("article>p")
console.log(paragraphsList)
// paragraphsList.classList.add("nuova-classe") <-- Non facciamoci prendere la tentazione di modificare le varie proprietà innerText/classList/ecc di ARRAY. Lo possiamo fare solo agendo sui SINGOLI OGGETTI. Se volessi andare a modificare un array di elementi, bisogna ciclare l'array
for (let i = 0; i < paragraphsList.length; i++) {
  paragraphsList[i].classList.add("ulteriore-classe")
}

paragraphsList[0].classList.remove("nuova-classe") // come aggiungo le classi anche posso rimuoverle

paragraphsList[0].style.fontSize = "1.5em"

const makeThemOrange = function () {
  // 1. Seleziona gli elementi
  const listItems = document.querySelectorAll("#main-menu>li")
  // 2. Applico il colore arancione a tutti gli elementi (essendo un array dovrò ciclare!)
  for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index]
    element.style.color = "orange"
  }
}

// makeThemOrange() // Se non invoco la funzione nulla succederà, le funzioni però possono essere anche associate al click di un pulsante (VEDI HTML)

const makeFooterInvisible = function () {
  // 1. Seleziono il footer
  const footer = document.getElementById("footer")
  // 2. Modifico il footer aggiungendogli la classe 'invisible'
  footer.classList.toggle("invisible") // Aggiungo/tolgo la classe 'invisible'
}

const addNewListItem = function () {
  // Per creare nuovi elementi nella pagina devo:
  // 1. Creare l'elemento tramite createElement
  // 1.1 Creo l'elemento vuoto
  const newListItem = document.createElement("li") // <li></li>
  // 1.2 Ci aggiungo del testo
  newListItem.innerText = "NUOVO LI"

  // 2. Inserire l'elemento nella pagina alla posizione desiderata
  // Una volta che siamo soddisfatti di come abbiamo creato l'elemento, bisogna quindi inserirlo da qualche parte. La maniera più classica per fare ciò è selezionare nel DOM il suo contenitore e appendercelo dentro
  // 2.1 Trovo il parent che nel nostro caso è l'elemento <ul> che ha id 'main-menu'
  const ul = document.getElementById("main-menu")
  // 2.2 Uso appendChild per aggiungere un nuovo figlio
  ul.appendChild(newListItem)
}
