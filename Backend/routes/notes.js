const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require('express-validator');


// route 1  -- to get all the notes:login required
router.get("/fetch-all-notes", fetchuser, (req, res) => {
    Notes.find({ user: req.user.id }, function (err, note) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(note);
    });
})





// route 2:add a new notes using a new request:login required

router.post("/add-notes", fetchuser, [
    body('title', 'Enter a valid Title.').isLength({ min: 3 }),
    body('description', 'Description must be of atleast five characters.').isLength({ min: 5 })
], async (req, res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    Notes.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user: req.user.id
    }, function (err, note) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(note);
        return;
    })

})




// route 3-- to update the notes..using put request, login is required

router.put("/update-note/:id", fetchuser, async function (req, res) {
    let newnote = {};
    const { title, description, tag } = req.body;
    if (title) {
        newnote.title = title;
    }
    if (description) {
        newnote.description = description;
    }
    if (tag) {
        newnote.tag = tag;
    }
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not found");
    }
    console.log(note);
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
    }
    Notes.findByIdAndUpdate(req.params.id, newnote, { new: "true" }, function (err, note) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(note);
    });

})



// route 3-- to update the notes..using delete request, login is required

router.delete("/delete-note/:id", fetchuser, async function (req, res) {
    // find the note to be deleted and delete it
    try{
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not found");
    }
    console.log(note);
    // check that same owner of notes is deleting the notes 
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
    }
    Notes.findByIdAndDelete(req.params.id, function (err, note) {
        if (err) {
            console.log(err);
            return;
        }
        res.json({success:"note has been deleted"});
    });
} catch(error){
    res.status(500).json({error:"internal server error"});
}

})


module.exports = router;