var express= require('express');
var fs= require('fs');
var router = express.Router();

//Get Homepage
router.get('/', function(req,res) {
    fs.readFile('about.txt',
            function(err, data) {       
                if (err) {
                    return res.render('about', {
                        paratext: '',
                        title: 'About Page'
                      });
                }
                return res.render('about', {
                    paratext: data.toString('utf8'),
                    title: 'About Page'
                  });
        });
});

module.exports = router;
