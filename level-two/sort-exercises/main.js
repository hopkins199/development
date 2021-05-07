// 1... Sort an array from smallest number to largest

const leastToGreatest = [1, 3, 5, 2, 90, 20]

leastToGreatest.sort((a,b) => a - b)
  
  // console.log(leastToGreatest) // [1, 2, 3, 5, 20, 90] 
  
  // 2 Sort an array from largest number to smallest

  const greatestToLeast = [1, 3, 5, 2, 90, 20]

  greatestToLeast.sort((a,b) => b - a)
   // console.log(greatestToLeast)

   //3 Sort an array from shortest string to longest

   const lengthShort = ["dog", "wolf", "by", "family", "eaten"]

   lengthShort.sort((a,b) => a.length - b.length)
    //console.log(lengthShort)

    //4 Sort an array alphabetically

    const alphabetical = ["dog", "wolf", "by", "family", "eaten"]

    alphabetical.sort()
        //console.log(alphabetical)

// 5  Sort the objects in the array by age

    const byAge = [
        { name: "Quiet Samurai", age: 22 },
        { name: "Arrogant Ambassador", age: 100 },
        { name: "Misunderstood Observer", age: 2 },
        { name: "Unlucky Swami", age: 77 }
    ]

    byAge.sort((a,b) => a.age - b.age)
        console.log(byAge)