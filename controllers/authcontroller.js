var exports = module.exports = {}
const models = require('../models');
const passport   = require('passport');

exports.signup = function(req,res){

	res.render('main/signup');

}

exports.signin = function(req,res){

	res.render('main/signin');

}

exports.dashboard = function(req,res){
    let page = req.query.page || 1;
    // let userInfo = req.logIn(user, { session: true });
    let user = req.user;
    let userHaveBengkel;
    let offset = 0;
    if (page > 1) {
        offset = ((page - 1) * 10)  + 1;
    }
    models.Bengkel.findOne({ where : { UserId: req.user.id}}).then(function (bengkel) {
        userHaveBengkel = bengkel.get();
        }).catch(function(err){
        console.log("Error:",err);
        });

    models.Mekanik.findAndCountAll({
        limit : 10,
        offset: offset,
        order : [['id','DESC']],
    }).then((mekanik) => {
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus};
        const totalPage = Math.ceil(mekanik.count / 10);
        const pagination = {totalPage : totalPage, currentPage: page};
        res.render('main/dashboard',{
        bengkelUser: userHaveBengkel,
        user: user,
        mekanik: mekanik.rows,
        alert: alert,
        pagination: pagination
        });
    });

//   let page = req.query.page || 1;
//     let offset = 0;
//     if (page > 1) {
//         offset = ((page - 1) * 10)  + 1;
//     }
//     models.Bengkel.findOne({
//         limit : 10,
//         offset: offset,
//         order : [['id','DESC']],
//     }).then((mekanik) => {
//         const alertMessage = req.flash('alertMessage');
//         const alertStatus = req.flash('alertStatus');
//         const alert = { message: alertMessage, status: alertStatus};
//         const totalPage = Math.ceil(mekanik.count / 10);
//         const pagination = {totalPage : totalPage, currentPage: page};

//         // console.log(mekanik);
//         res.render('main/dashboard', {
//         bengkel: mekanik.rows,
//         alert: alert,
//         pagination: pagination
//         });
//     });

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}