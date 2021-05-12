// first problem
function doubleNumbers(arr){
    let doubleArr = arr.map(x=>x*2)
    return doubleArr
  }
  
  //console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  // second problem
  function stringItUp(arr){
    let strArr = arr.map(String)
    return strArr
  }
  
  //console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

  // third problem
  function capitalizeNames(arr){
    let upperClassArr = arr.map(funtion(string){
        return string.substr(0,1).toUpperCase() + string.substr(1).toLowerCase()
    })
    return upperClassArr
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  // fourth problem
  function namesOnly(arr){
    let onlyNameArr = arr.map(x=>x.name)
    return onlyNameArr
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  // fifth problem
    
    function makeStrings(arr){
        let reFormArr = arr.map(arr =>{
      if(arr.age>=18){
        console.log(arr.name + ' can go to The Matrix') 
      }else {
          console.log(arr.name + " is under age!!");
        }
        })
    }

  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

  // sixth problem
    
    function readyToPutInTheDOM(arr){
        let reFormArr = arr.map(arr =>{
        console.log('<h1>'+arr.name+'</h1>'+"<h2>"+arr.age+'</h2>')
        })
    }
  
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]