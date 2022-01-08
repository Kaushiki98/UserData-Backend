module.exports = (app) => {
  const notes = require('../app/controller');

  app.post('/send-data', notes.create);

}
