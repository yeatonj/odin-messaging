async function loginGet(req, res, next) {
    res.render("login", {
        title: "Login Page"
    });
}

async function loginPost(req, res, next) {
    await addAuthor(req.body.newAuthor);
    res.redirect("/");
}

module.exports = {
    loginGet,
    loginPost
}