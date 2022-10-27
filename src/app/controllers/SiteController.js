const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    //GET /
    index(req, res) {
        

        Course.find({})
            .then(courses => {                
                res.render('home',{
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(error => {next(error)})
        //res.render('home');
    }

    //GET /search
    search(req, res) {
        console.log(req.query.q);
        res.render('search');
    }
}

module.exports = new SiteController();
