

const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const whatsappController = require('../controller/whatsappController');


router.get('/shopifyUser', userController.getShopifyUser);
router.post('/shopifyUser', userController.postShopifyUser);


router.get('/mobile', whatsappController.getCountrycode);
router.post('/whatsApp', whatsappController.postWhatsAppData);
router.get('/whatsApp', whatsappController.getWhatsAppData);
router.get('/editWhatsApp/:id', whatsappController.getWhatsAppDataById);
router.put('/updateWhatsApp/:id', whatsappController.updateWhatsApp);
router.delete('/deleteWhatsApp/:id', whatsappController.deleteWhatsApp);

module.exports = router;
