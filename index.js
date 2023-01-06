const submitBtn = document.getElementById("submit")
const errorElement = document.getElementById("error")

const getInputValueById = (id) => {
    return document.getElementById(id).value;
}


const handleSubmit = () => {
    errorElement.textContent = ''

    const inputIds = ["fullname","email","password","confirmPassword"]
    const user = {}
    let isError = false;

    inputIds.forEach((id) => {
        const userData = getInputValueById(id)

        if(!userData){
            isError = true
            return
        }
      
        user[id] = userData
    })
    if(isError){
        errorElement.textContent = 'Error: All fields are mandatory'
        errorElement.style.color='red'
        return 
    }
    //password mismatch error display
    if(user.password !== user.confirmPassword){
        errorElement.textContent = 'Error: Password and confirm password must match'
        errorElement.style.color='red'
        return 
    }
//generate access token and add to our user object
    const access_token = (Math.random()+1).toString(36).substring(1)
    user.access_token = access_token

    console.log("userdetails", user);

    //local storage of our user
    localStorage.setItem('user',JSON.stringify(user))

    //redirect user from signup to profile page
    // window.location.href = "./profilepage.html"
    window.open("./profilepage.html","_self")
}


submitBtn.addEventListener("click",handleSubmit)
document.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded");
})
