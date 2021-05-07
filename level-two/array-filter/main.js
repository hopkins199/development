// problem one

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(num => num > 5)
    return result
  }
  // test
  //console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

 
 
  // problem two

  function evensOnly(arr) {
    const even = arr.filter(num => num %2 === 0)
    return even
  }
  // test
 // console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

 
 
  //problem three
  function fiveCharactersOrFewerOnly(arr) {
    const smol = arr.filter(fiveCharactersOrFewerOnly => fiveCharactersOrFewerOnly.length < 5)
    return smol
  }
  // test
 //console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  


  // problem four
  function peopleWhoBelongToTheIlluminati(arr){
    const belong = arr.filter(peopleWhoBelongToTheIlluminati => peopleWhoBelongToTheIlluminati.member === true)
    return belong
  }
  // test
  //console.log(peopleWhoBelongToTheIlluminati([
  //    { name: "Angelina Jolie", member: true },
  //    { name: "Eric Jones", member: false },
  //    { name: "Paris Hilton", member: true },
  //    { name: "Kayne West", member: false },
  //   { name: "Bob Ziroll", member: true }
  //]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  

  //problem five
  function ofAge(arr){
    const oldEnuff = arr.filter(ofAge => ofAge.age > 18)
    return oldEnuff
  }
  // test
  //console.log(ofAge([
  //    { name: "Angelina Jolie", age: 80 },
  //    { name: "Eric Jones", age: 2 },
  //    { name: "Paris Hilton", age: 5 },
  //    { name: "Kayne West", age: 16 },
  //    { name: "Bob Ziroll", age: 100 }
  //])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]