const fs = require('fs')
const path = require('path')

// // create file
// fs.mkdir( path.join(path.dirname(__filename), 'text'), {}, (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// } )

// // create file and write at file
// fs.writeFile( path.join( path.dirname(__filename), 'index.html' ), "This is html file",  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// })

// fs.writeFile( path.join( path.dirname(__filename), 'text','index.html' ), "This is html file",  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// })

// fs.writeFile( path.join( path.dirname(__filename),'text', 'script.js' ), "console.log('Hello')",  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// })

// let books = [
//   {
//     name: 'A'
//   },
//   {
//     name: 'B'
//   },
//   {
//     name: 'C'
//   },
// ]

// fs.writeFile( path.join( path.dirname(__filename),'books', 'books.json' ), JSON.stringify(books, undefined, 4),  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// })

// fs.appendFile( path.join( path.dirname(__filename),'books', 'books.json' ), ",console.log('Hello')",  (err) => {
// if(err) {
//   console.log(err)
// } else {
//   console.log('console.log')
// }
// })

// fs.readFile( path.join(path.dirname(__filename),'books', 'books.json'), 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// } )

// fs.readFile( path.join(path.dirname(__filename),'text', 'script.js'), 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// } )



// let data = fs.readFileSync( path.join(path.dirname(__filename),'books', 'books.json'), 'utf-8', (err, data) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('data')
//   }
// } )
// data = JSON.parse(data)
// data.pop()
// data.pop()
// console.log(data)


// fs.writeFile( path.join( path.dirname(__filename),'books', 'books.json' ), JSON.stringify(data, undefined, 4),  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('File Yaratildi')
//   }
// })

// rename
// fs.rename(
//   path.join(path.dirname(__filename), 'books', 'books.json'),
//   path.join(path.dirname(__filename), 'books', 'kitoblar.json'),
//   (err) => {
//   if(err){
//     console.log(err)
//   }else{
//     console.log('fayl ozgartirildi')
//   }
//   }
// )

// let os = require('os')

// // os win
// console.log(os.platform())

// // x64
// console.log(os.arch())

// // yadro
// console.log(os.cpus())

// // bosh joy
// console.log(os.freemem())

// // hamma joy
// console.log(os.totalmem())

// // qanchadn beri ishlayotgan vaqti
// console.log(os.uptime())




//       HOMEWORK

//  ADD BOOK
let books = fs.readFileSync(path.join(path.dirname(__filename), 'books', 'books.json'), 'utf-8', (err, books) => {
  if (err) {
    console.log(err)
  } else {
    console.log('books')
  }
})
books = JSON.parse(books)

// function addBook(newBook){
//   books.push(newBook)
// }

// addBook({
//   "id": 5,
//   "name": "Alximik",
//   "author": "Paolo Koelyo",
//   "pages": 153
// },)

// fs.writeFile( path.join( path.dirname(__filename),'books', 'books.json' ), JSON.stringify(books, undefined, 4),  (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('book qoshildi')
//   }
// })


// //  remove
// function removeBook(id) {
//   books.forEach((item, index) => {
//     if (item.id == id) {
//       books.splice(index, 1)
//     }
//   }
//   )
// }

// removeBook(2)

// fs.writeFile(path.join(path.dirname(__filename), 'books', 'books.json'), JSON.stringify(books, undefined, 4), (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('book olindi')
//   }
// })


// change

// let deleteBook = (id) => {
//   let book = books.find(book => book.id == id)
//   if (book) {
//       books.splice(books.indexOf(book), 1)
//       console.log(books)
//   } 
// }
// deleteBook(5)

// fs.writeFile(path.join(path.dirname(__filename), 'books', 'books.json'), JSON.stringify(books, undefined, 4), (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('book ochirildi')
//   }
// })