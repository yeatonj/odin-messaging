
const { deleteMessage } = require('../db/queries');

async function deletePost(req, res) {
    if (req.user && req.user.isadmin) {
        deleteMessage(req.body.postid);
        res.redirect("/");
    } else {
        res.redirect("/");
    }
}

module.exports = {
    deletePost
}