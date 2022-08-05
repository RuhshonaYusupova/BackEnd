
let div = document.querySelector(".div")

let colors = ["red", 'yellow', 'green', 'crimson', 'blue', 'white', 'pink', 'purple', 'black']

let index = 0


document.body.addEventListener("keypress", (e) => {

  div.style.backgroundColor = colors[index]


  let top = window.getComputedStyle(document.querySelector(".div")).top
  let left = window.getComputedStyle(document.querySelector(".div")).left

  // w
  if(e.keyCode == 119){
      div.style.top = parseFloat(top) - 50 + 'px'
  }
  // a
  if(e.keyCode == 97){
      div.style.left = parseFloat(left) - 50 + 'px'
  }
  // s
  if(e.keyCode == 115){
      div.style.top = parseFloat(top) + 50 + 'px'
  }
  // d
  if(e.keyCode == 100){
      div.style.left = parseFloat(left) + 50 + 'px'
  }

  index++
  if(index == colors.length){
    index = 0
  }

})


// class Shopping {
//   constructor (brand, product, howMany) {
//     this.brand = brand
//     this.product = product
//     this.howMany = howMany
//   }
//   set setBrand(newBrand) {
//     this.brand = newBrand
//   }

//   set setProduct(newProduct) {
//     this.product = newProduct
//   }

//   set setNumber(newNumber) {
//     this.howMany = newNumber
//   }


// }

// let lucy = new Shopping("Gucci", "dress", 2)
// console.log(lucy)

// lucy.setBrand = "Versace"
// console.log(lucy)


// let steve = new Shopping("D&G", "shoes", 1)
// console.log(steve)

// steve.setNumber = 3
// console.log(steve)


// let lily = new Shopping("Chanel", "parfume", 5)
// console.log(lily)

// lily.setProduct = "dress"
// console.log(lily)