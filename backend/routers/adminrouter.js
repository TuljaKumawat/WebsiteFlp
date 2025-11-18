const router=require('express').Router()
const projectc=require('../controllers/projectcontroller')
const upload=require('../middleware/multer')
const nodemailer=require('nodemailer')
const clientc=require('../controllers/clientcontroller')
const contactFormc=require('../controllers/contactFormcontroller')
const newsletterc=require('../controllers/newslettercontroller')




// GET all projects
router.get('/project', projectc.allproject);

// POST add project
router.post('/addproject', upload.single('img'), projectc.newproject);


// TOGGLE publish/unpublish
router.patch('/projectstatusupdate/:id/:status', projectc.projectstatus);


module.exports = router;


//client
router.get('/client', clientc.allclient);
router.post('/addclient', upload.single('img'), clientc.addclient);
router.patch('/client/status/:id/:status', clientc.clientstatus);

//contactForm
router.get('/contact', contactFormc.allcontactform);

//newsletter
router.get('/subscribe', newsletterc.allnewslettersubscribers);

module.exports=router


