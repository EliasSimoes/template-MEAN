var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../app/models/user');
var Message = require('../models/message');

//path raiz
router.get('/', function(req, res, next) {
    res.render('index');
});

// router.get('/index', function (req, res, next) {
//     res.render('index');
// });

// trazer do banco
router.get('/messages', function (req, res, next) {
   Message.find(function (err, messages) {
       if (err){
           return res.status(500).json({
                message: 'Erro ao trazer o dado do banco!!!'
           });
       }
       res.status(200).json({
          data: messages
       });
   });
});

//enviar
router.post('/message', function (req, res, next) {
    var message = new Message({
        gostei: req.body.gostei,
        nome: req.body.nome,
        comentario: req.body.comentario
    });
    message.save(function (err, result) {
        if (err){
            return res.status(500).json({
                message: 'Erro ao salvar a mensagem!'
            });
        }
        res.status(201).json({
           message: 'Mensagem salva com sucesso!'
        });
    });
});

// //editar
// router.get('/message/:id', function (req, res) {
//     Message.findById(req.params.id, function (err, message) {
//        if(err){
//            return res.status(500).json({
//               title: 'Ocorreu algum erro',
//               error: err
//            });
//        }
//
//        if(!message){
//            return res.status(500).json({
//               title: 'Nenhum comentário encontrado',
//               error: {message: 'Nenhum comentário encontrado'}
//            });
//        }
//
//        message.comentario = req.body.comentario;
//        message.remove(function (err, result) {
//            if(err){
//                return res.status(500).json({
//                    title: 'Ocorreu algum erro',
//                    error: err
//                });
//            }
//            res.status(200).json({
//                 title: 'Comentário deletado!',
//                 obj: result
//            });
//        })
//     });
// });

// module.exports = function(app, passport) {
//
//     app.post('/', passport.authenticate('local-login', {
//         successRedirect: '/index',
//         failureRedirect: '/login',
//         failureFlash: true
//     }));
//
//     app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
//
//     app.get('/auth/facebook/callback',
//         passport.authenticate('facebook', {
//             successRedirect: '/index',
//             failureRedirect: '/login'
//         }));
//
// }



module.exports = router;
