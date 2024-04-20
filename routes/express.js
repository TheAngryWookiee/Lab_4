app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home' });
  });
  