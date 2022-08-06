// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   alert('Finished my homework');
// });


// function getSubject(subject) {
//   if(subject == 'English'){
//     alert("I love English too")
//   }else{
//     alert(`I don't like ${subject}`)
//   }

// }

// function printSubject (callback) {
//   let subject = prompt("Choose one: English or Math");
//   callback(subject)
// }


// printSubject(getSubject);

let subjects = ['English','Russian','Math','History','Biology']

let ol = document.querySelector('.box')


//  callback
/* 

function showSubject() {
  setTimeout(() => {
    subjects.forEach((subject) => {
      ol.innerHTML += `<li>${subject}</li>`
    })
  },1000)
}


function addSubject(newSubject,callback) {
  setTimeout(() => {
    subjects.push(newSubject)
    callback()
  }, 2000)
}

addSubject('Art', showSubject)

*/

//  promise
/*

function showSubject() {
  setTimeout(() => {
    subjects.forEach((subject) => {
      ol.innerHTML += `<li>${subject}</li>`
    })
  },1000)
}


function addSubject(newSubject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      subjects.push(newSubject)
      if(true){
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}

addSubject('Chemistry')
.then(showSubject)

*/

// async
/*

function showSubject() {
  setTimeout(() => {
    subjects.forEach((subject) => {
      ol.innerHTML += `<li>${subject}</li>`
    })
  },1000)
}


function addSubject(newSubject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      subjects.push(newSubject)
      if(true){
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}

async function Asyn(){
  await addSubject('IT')
  showSubject()
}

Asyn()

*/


