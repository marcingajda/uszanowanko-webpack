var $               = require('jquery');
var catHeadImage    = require('../images/cat_head.png');

$('.head').append('<img src="'+catHeadImage+'" />');

head = function(){ return 'cats head' };

module.exports = head;