var express = require("express");
const nodemailer = require("nodemailer");
const UserInvite = require("../models/userinvite");

var router = express.Router();

// Route to get all userinvites
router.get("/", (req, res, next) => {
    UserInvite.find()
        .then(invites => {
            res.json(invites);
        })
        .catch(err => next(err));
});

router.get("/:token", (req, res, next) => {
    UserInvite.findOne(req.params)
        .then(invite => {
            if (invite !== null) {
                res.json({
                    isInDatabase: true,
                    email: invite.email
                });
                console.log("DING, DING!");
            } else {
                console.log("NOPE");
            }
        })
        .catch(err => next(err));
});

router.get("/", (req, res, next) => {
    UserInvite.find()
        .then(invites => {
            res.json(invites);
        })
        .catch(err => next(err));
});

router.delete("/", (req, res, next) => {
    console.log(req.body);
    UserInvite.findOneAndRemove({ email: req.body.email })
        .then(() => {
            res.json({
                success: true
            });
        })
        .catch(err => next(err));
});

// Route to add an invite
router.post("/", (req, res, next) => {
    console.log(req.body);
    let { email, token, isActive } = req.body;
    UserInvite.create({ email, token, isActive }).then(invite => {
        res.json({
            success: true,
            invite
        });
    });
    let message = "http://localhost:3000/check/".concat(token);
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "fakeuser049@gmail.com",
            pass: "xahbe&C7J@iNg8ee"
        }
    });
    transporter
        .sendMail({
            from: '"My Awesome Project 👻" <fakeuser049@gmail.com>',
            to: email,
            subject: "Bitte Anmeldung zu Usta bestätigen",
            text: `Bitte diesen Link im Browser aufrufen: ${message} `,
            html: `<a href=${message}>Bitte diesen Link im Browser aufrufen</a>`
        })

        .catch(err => next(err));
});

module.exports = router;
