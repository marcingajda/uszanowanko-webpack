uszanowanko = require('./common/uszanowanko');

require(['./cat/head', './cat/body'],
    function(catsHead, catsBody){
        console.log(catsHead());
        console.log(catsBody());
        uszanowanko();
    }
);

if(module.hot) {
    module.hot.accept("./common/uszanowanko", function() {
        var uszanowanko = require('./common/uszanowanko');
        var $ = require('jquery');
        $('h2').remove();
        uszanowanko();
    });
}