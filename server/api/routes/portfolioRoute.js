const router = require("express").Router();


const { Intro, About, Project, Contact, Experience} = require ('../models/portfolioModel');

router.get('/get-portfolio-data', async(req, res) => {
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
})

module.exports = router;