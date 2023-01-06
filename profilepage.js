const user = JSON.parse(localStorage.getItem('user'))
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
})
console.log(user?.access_token)
console.log(user);
const redirect = () => {
    localStorage.clear('user')
    window.open("./index.html", "_self")
    return
}

const isUserLoggedIn = () => {
    if (user?.access_token) {
        return true
    }
    return false
}


const renderData = (user) => {
console.log("user",user)
var nameInProfile = document.getElementById("name-profile")
nameInProfile.textContent += user.fullname

var emailInProfile = document.getElementById("email-profile")
emailInProfile.textContent += user.email

var passwordInProfile = document.getElementById("password-profile")
passwordInProfile.textContent += user.password
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("check", isUserLoggedIn());
    console.log("loaded");
    // alert("hii")
    if (isUserLoggedIn()) {
        renderData(user)
    }
    else {
        redirect()
    }
})

const logOut = document.getElementById("logout")
logOut.onclick = redirect
