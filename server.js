const app = require('./app')
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log('server has started on port ' + port);
})
