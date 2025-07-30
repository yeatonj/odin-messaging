async function indexGet(req, res) {
    res.render("index", {
        title: "Main Page",
        user: req.user
    });
}

module.exports = {
    indexGet
}