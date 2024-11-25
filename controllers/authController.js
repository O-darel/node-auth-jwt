
//renders the login page
module.exports.loginGet = (req, res) => {
    res.render("base", {
        title: "Login",
        contentFile: "login"
    })
}


//renders the sign up page
module.exports.signUpGet = (req, res) => {
    res.render("base",{
        title: "Sign Up",
        contentFile: "signup"
    })
}


//controller for login request
module.exports.loginPost = (req, res) => {
    res.send("login")
}


//controller for signUp
module.exports.signUpPost = (req, res) => {
    res.send("login")
}