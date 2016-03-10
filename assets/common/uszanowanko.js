$ = require('jquery');

wow = function(){
    console.log($('body'));
    $('body').prepend('<h2>Uszanowanko, wow!</h2>');
};

module.exports = wow;
