'use strict';

module.exports = function(){
    return {
        SetRouting: function(router){
           router.get('/', this.indexPage);
           router.get('/signup', this.getSignup);
        },
        indexPage: function(req, res){
            return res.render('index', {test: "Test File"});
        },
        getSignup: function(req, res){
            return res.render('signup');
        }
    }
}