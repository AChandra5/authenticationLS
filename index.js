 const submitBtn = document.getElementById("submit")
 let userDetails = {}



//generating a random access token
let token
 function generateAccessToken() {
    // Generate a random number using Math.random()
     token = Math.random().toString(36).substring(2);
    return token;
  }



 const signUp = () => {

    userDetails.name = document.getElementById("fullname").value
    userDetails.email = document.getElementById("email").value
    userDetails.accessToken = generateAccessToken()
    if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
        userDetails.password = document.getElementById("password").value
    }
    console.log("userdetails ", userDetails)
    
    //conditional display of error messages.
    if ((userDetails.name == "") || (userDetails.email == "") || (userDetails.password == "")) {
        document.getElementById("error-feedback").style.display = 'block'
        document.getElementById("sucess-feedback").style.display = 'none'
    } else {
        document.getElementById("error-feedback").style.display = 'none'
        document.getElementById("sucess-feedback").style.display = 'block'
        // window.location.href = './profilepage.html'

    }

            //storing the user details in localstorage
            localStorage.setItem('user', JSON.stringify({
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                accessToken : userDetails.accessToken
            }))

            const user = JSON.parse(localStorage.getItem('user'))
    // console.log("user", user)
    // window.location.href = './profilepage.html'

    // if (JSON.parse(localStorage.user).accessToken) {
        // If the user is logged in, redirect to the profile page
        // window.location.href = './profilepage.html'
        // document.getElementById("name-profile").innerHTML = `Hii`
    //   }
   
}

submitBtn.onclick=signUp
// console.log(JSON.parse(localStorage.user).name)


 




