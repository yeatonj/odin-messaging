async function indexGet(req, res) {
    res.render("index", {
        title: "Main Page"
    });
}

module.exports = {
    indexGet
}