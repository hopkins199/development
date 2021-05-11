function sum(x, y){
    try {
          if(x === "") throw "empty"
          if(isNaN(x)) throw "not a number"
          x = Number(x)
          if(y === "") throw "empty"
          if(isNaN(y)) throw "not a number"
          y = Number(y)
          sum // invoking without parentheses works, but so does commenting this out altogether
        }
        catch(err) {
          console.log("Input is " + err)
        }
        finally {
          console.log("I am running!") 
        }
        return x + y
    }
      // console.log(sum(1, 2))
      // console.log(sum("", 2))
      // console.log(sum("1", "2"))
      // console.log(sum("foo", 2))
      // sum(1, 2)
      // sum("1", 2)
      // sum(1, "2")
      sum("foo", 2)


var userData = {
    username: "NFL Fan",
    password: "5566",
};
function user (username, password){
  if (username === userData.username && password === userData.password){
     console.log("Login successful")
  }else {
     throw new Error("Username or Password is incorrect")
  }
}

try {
    user("NFL Fan", "5566")
}
catch (error) {
    console.log(error)
}