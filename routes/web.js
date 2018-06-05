const router = require('express').Router();
const passport   = require('passport');
const models = require('../models');
var userController = require('../controllers/userController.js');
var bengkelController = require('../controllers/bengkelController.js');
var mekanikController = require('../controllers/mekanikController.js');
const Op = require('sequelize').Op;
var authRoute = require('./auth.js')(router,passport);

router.get('/', mekanikController.indexWelcome);

router.get('/load',function(req,res){
    console.log("<== load data dari tabel ==>");
    models.Mekanik.findAndCountAll({
        order : [['id','DESC']],
    }).then((mekanik) => {
        console.log("<== Data sedang di load. ==>");
		res.end(JSON.stringify(mekanik.rows));
		console.log("<== Data dikirim ke client ==>");
    });
});

// router.get('/user/', userController.index);
// router.get('/user/create', userController.create);
// router.post('/user/create', userController.createUser);
// router.get('/user/:id/edit', userController.edit);
// router.post('/user/:id/edit', userController.editUser);
// router.get('/user/delete/:id', userController.hapusUser);

router.get('/bengkel/', bengkelController.index);
// router.get('/bengkel/create', bengkelController.create);
// router.post('/bengkel/create', bengkelController.createBengkel);
// router.get('/bengkel/:id/edit', bengkelController.edit);
// router.post('/bengkel/:id/edit', bengkelController.editBengkel);
// router.get('/bengkel/delete/:id', bengkelController.hapusBengkel);

router.get('/mekanik/', mekanikController.indexMekanik);
router.get('/mekanik/create', mekanikController.create);
router.post('/mekanik/create', mekanikController.createMekanik);
router.get('/mekanik/:id/edit', mekanikController.edit);
router.post('/mekanik/:id/edit', mekanikController.editMekanik);
router.get('/mekanik/delete/:id', mekanikController.hapusMekanik);
router.get('*', bengkelController.notFound);

module.exports = router;