const { getMessages } = require("../db/queries");

async function indexGet(req, res) {
    // Get message data if we have a user
    let messages = undefined;
    if (req.user) {
        messages = await getMessages();
    }
    res.render("index", {
        title: "Main Page",
        user: req.user,
        messages: messages
    });
}

module.exports = {
    indexGet
}