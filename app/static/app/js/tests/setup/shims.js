// Prevent warning on missing polyfill
global.requestAnimationFrame = function(callback) {
	setTimeout(callback, 0);
};

import $ from 'jquery';

// Bootstrap polyfills
$.prototype.modal = () => {};
