const { setAdmin, setMember } = require('../db/queries');

async function permissionsGet(req, res) {
    res.render("permissions", {
        title: "Permissions Adjustment",
        user: req.user,
    });
}

async function permissionsPost(req, res) {
    process.env.PORT
    if (req.user) {
        if (req.body.admin === process.env.ADMIN_CODE) {
            setAdmin(true, req.user.id);
        }
        if (req.body.member === process.env.MEMBERSHIP_CODE) {
            setMember(true, req.user.id);
        }
        res.redirect("/");
    } else {
        res.redirect("/");
    }
}

module.exports = {
    permissionsGet,
    permissionsPost
}