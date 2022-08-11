const { v4 } = require('uuid')

// //  uuid
// for(let i=0; i<=10; i++){
//   console.log(v4())
// }

const path = require('path')

// // file
// console.log(path.basename(__filename))

// // papka
// console.log(path.basename(__dirname))

// // toliq filegacha yo'l
// console.log(path.dirname(__filename))

// // file formati
// console.log(path.extname(__filename))

// // parse
// const fileObj = path.parse(__filename)
// console.log(fileObj)
// console.log(fileObj.root)
// console.log(fileObj.ext)

// // join
// console.log(path.join(__dirname, 'img', '1.jpg'))

let books = [
  {
    name: 'Harry Potter',
    pages: '100'
  },
  {
    name: 'Twilight',
    pages: '250'
  },
  {
    name: 'The Lord Of The Rings',
    pages: '300'
  },
];


function addImg(img) {
  books.forEach((book, index) => {
    book.id = v4()
    book.img = path.join(__dirname, 'img', img[index] )
  })
}

addImg(['HarryPotter.jpg','Twilight.jpg','TheLordOfTheRings.jpg'])

console.log(books)