const { postMessage } = require("../db/queries");

async function newPostGet(req, res) {
    res.render("newPost", {
        title: "New Post",
        user: req.user,
    });
}

async function newPostPost(req, res) {
    if (req.user) {
        var datetime = new Date();
        postMessage(req.body.post, req.user.id, datetime);
        res.redirect("/");
    } else {
        res.redirect("/");
    }
}

module.exports = {
    newPostGet,
    newPostPost
}