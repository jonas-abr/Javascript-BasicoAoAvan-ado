const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo');
});

// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Job.findOne({
  where: {id: req.params.id}
}).then(job => {

  res.render('view', {
    job
  });

}).catch(err => console.log(err)));


// form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

// add job via post
router.post('/add', (req, res) => {

  let {TITLE, SALARY, COMPANY, DESCRIPTION, EMAIL, NEW_JOB} = req.body;

  // insert
  Job.create({
    TITLE,
    DESCRIPTION,
    SALARY,
    COMPANY,
    EMAIL,
    NEW_JOB
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));

});

module.exports = router