 
const getHomepage = (req, res) => {
    res.render('home'); // Render trang home.ejs
};

const User = require("../models/user")

// const postCreateUser = async (req, res) => {
//     let email = req.body.email;
//     let name = req.body.myname;
//     let city = req.body.city;

//     console.log(">>> email =", email, ' name =', name, ' city =', city);
//     await User.create({
//         email: email,
//         name: name,
//         city: city
//     });
//     res.send('succeed')
// };

module.exports = {
    getHomepage,
    // postCreateUser,
}