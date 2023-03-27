const {Article} = require('../models');

module.exports.renderAddForm = function(req, res){
    const article = {
        title: '',
        intro: '',
        image_url: '',
        body: ''
    };
    res.render('articles/add', {article});
};