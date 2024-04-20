app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'index' });
  });

app.get('/animals', (req, res) => {
    res.render('all-animals'); 
});
  
app.get('/animals/new', (req, res) => {
    res.render('entry-form', { pageTitle: 'Entry Form' });
  });
  
 
app.get('/animals/:id/edit', (req, res) => {
    res.render('edit-animal', { pageTitle: 'Edit Animal' });
  });