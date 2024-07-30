const router = require("express").Router();


const { Intro, About, Project, Contact, Experience } = require('../models/portfolioModel');
const User = require('../models/userModel');

// get portfolio data
router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contact = await Contact.find();
        const experiences = await Experience.find();
        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            project: projects,
            experience: experiences,
            contact: contact[0],
        })

    } catch (error) {
        res.status(500).send(error);
    }
});

// update intro
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


// update about
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add Experience
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})


// update experience
router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete experience
router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// admin login
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
       if(user) {
        res.status(200).send({
            data: user,
            success: true,
            message: "Login successfully"
        });
       }
       else {
        res.status(200).send({
            data: user,
            success: false,
            message: "invalid username of password"
        })
       }
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;