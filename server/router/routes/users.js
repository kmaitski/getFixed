module.exports = (app, db) => {
  app.get('/users', (req, res) => {
    db.users.findAll().then(users => {
      res.json(users);
    });
  });

  app.get('/user/:id', (req, res) => {
    const user_id = req.params.id;
    db.users
      .findAll({
        where: {
          id: user_id
        }
      })
      .then(user => {
        res.status(200).send(user[0]);
      })
      .catch(err => {
        res.status(400).send();
      });
  });

  app.post('/user', (req, res) => {
    const user = req.body;
    db.users
      .create(user)
      .then(user => {
        res.status(201).send(user);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send();
      });
  });
};
