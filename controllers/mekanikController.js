const models = require('../models');

module.exports = {
    indexWelcome: (req, res) => {
        models.Mekanik.all().then(mekanik => {
            res.render('main/index', {mekanik: mekanik.rows});
        }).catch((err) => {
            res.send(err)
        })
    },
    indexMekanik: (req, res) => {
        let page = req.query.page || 1;
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
            res.render('mekanik/index',{
            bengkelUser: userHaveBengkel,
            user: user,
            mekanik: mekanik.rows,
            alert: alert,
            pagination: pagination
            });
        });
    },
    create: (req, res) => {
        res.render("mekanik/create")
    },
    createMekanik: (req, res) => {
        const { BengkelId, fullName, numberPhone, keterangan,} = req.body;
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus};
        models.Mekanik.create({
            BengkelId,
            fullName,
            numberPhone,
            keterangan
          }).then((Mekanik) => {
            res.render("mekanik/index",{

            })
            })
    },
    edit: (req, res) => {

    },
    editMekanik: (req, res) => {

    },
    hapusMekanik: (req, res) => {

    }
};




// exports.create = function(req, res) {
//     const alertMessage = req.flash('alertMessage');
//     const alertStatus = req.flash('alertStatus');
//     const alert = { message: alertMessage, status: alertStatus};

//     let data = {
//     name: req.flash('nama'),
//     gender: req.flash('gender'),
//     no_telp: req.flash('no_telp'),
//     alamat: req.flash('alamat')
//     };
//     res.render('siswa/tambah',{
//     alert: alert,
//     data: data
//     });
// }
// exports.createSiswa = function(req, res) {
//     models.bengkel.build(req.body).save().then(() => {
//         req.flash('alertMessage','Sukses Menambahkan Data Siswa');
//         req.flash('alertStatus', 'success');
//         res.redirect('/siswa');
//       }).catch((err) => {
//         req.flash('alertMessage', err.message);
//         req.flash('alertStatus', 'danger');
//         req.flash('name',req.body.nama);
//         req.flash('name',req.body.gender);
//         req.flash('name',req.body.no_telp);
//         req.flash('name',req.body.alamat);
//         res.redirect('/siswa/tambah');
//       });
// }
// exports.edit = function(req, res) {
//     const alertMessage = req.flash('alertMessage');
//     const alertStatus = req.flash('alertStatus');
//     const alert = { message: alertMessage, status: alertStatus};

//     const id = req.params.id;
//     models.bengkel.findById(id).then((siswa) => {
//     res.render('siswa/edit',{
//         alert: alert,
//         siswa: siswa
//     });
//     });
// }
// exports.editSiswa = function(req, res) {
//     const id = req.params.id;
//     models.bengkel.findById(id).then((siswa) => {
//     return siswa.update(req.body);
//     }).then(() => {
//     req.flash('alertMessage', `Sukses Mengubah Data Siswa dengan id : ${id}`);
//     req.flash('alertStatus', 'success');
//     res.redirect('/siswa');
//     }).catch((err) => {
//     req.flash('alertMessage', err.message);
//     req.flash('alertStatus', 'danger');
//     res.redirect('/siswa');
//     });
// }
// exports.hapusSiswa = function(req, res) {
//     let id = req.params.id;
//     models.bengkel.findById(id).then((siswa) => {
//         return siswa.destroy();
//     }).then(() => {
//     req.flash('alertMessage', `Sukses Menghapus Data Siswa dengan id : ${id}`);
//     req.flash('alertStatus', 'success');
//     res.redirect('/siswa');
//     }).catch((err) => {
//     req.flash('alertMessage', err.message);
//     req.flash('alertStatus', 'danger');
//     res.redirect('/siswa');
//     });
// }