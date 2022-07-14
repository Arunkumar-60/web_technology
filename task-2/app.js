//imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

//adding static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//set template engine
app.use(expressLayouts)
app.set('views', './views')
app.set('view engine', 'ejs')

//navigations
app.get('',(req,res) => {
    res.render('index', {title: 'NIT-AP'})
})

app.get('/about', (req,res) => {
    res.render('about', {title: 'about'})
})

//listening to port
app.listen(port,() => console.info(`listening to the port ${port}`))
