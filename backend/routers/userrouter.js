const router=require('express').Router()
const contactFormc=require('../controllers/contactFormcontroller')
const newsletterc=require('../controllers/newslettercontroller')



router.post('/contact',contactFormc.newcontactForm)
router.post('/subscribe',newsletterc.newslettersubscribe)

module.exports=router