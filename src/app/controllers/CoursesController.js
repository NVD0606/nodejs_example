const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')
class CoursesController {
    //GET /courses/:slug
    show(req, res, next) {
        //res.send('Courses detail: ' + req.params.slug);

        Course.findOne({
            //_id: '6359db82a06b3c939438fef3',
            slug: req.params.slug
        })
        .then(function(data) {
                // res.json(data)
                res.render('courses/show',{data: mongooseToObject(data)})
            })
        .catch(next)
    }
}

module.exports = new CoursesController();
