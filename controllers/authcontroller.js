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
    console.log(req.query.page);
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus};
    res.render('main/dashboard', {
        alert: alert
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