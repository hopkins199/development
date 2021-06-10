// 1    Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

    function collectAnimals(...animals) {  
        return animals
    }

    collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
    // ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2    Write a function that returns a food object with the array names as properties using Object Literals:

    function combineFruit(...food){
        let [fruit, sweets, vegetables] = food
        return {fruit, sweets, vegetables}
    }
    
    combineFruit(["apple", "pear"],
                 ["cake", "pie"],
                 ["carrot"])
    /* {
            fruit: ["apple", "pear"],
            sweets: ["cake", "pie"],
            vegetables: ["carrot"]
         } */

// 3    Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }

// 4  Use destructuring to make this code ES6:

    function returnFirst(items){
    //const firstItem = items[0]; /*change this line to be es6*/
    return items[0]
    }

// 5    Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

    function returnFavorites(arr){
    let [firstFav,secondFav,thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
    }

    returnFavorites(favoriteActivities)
    console.log(returnFavorites(favoriteActivities))
