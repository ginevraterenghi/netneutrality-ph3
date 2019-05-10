// PRELOAD SCREEN
$(document).ready(function () {

});

$(window).on('load', function () {

	setTimeout(function () {

		$('.loading').fadeOut('slow', function () {
			$(this).remove();
		});

	}, 3000); // Here for setting time

});



//TYPING TEXT
//Made by Vipul Mirajkar: thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('typewrite');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #011ac2}";
	document.body.appendChild(css);
};




//3D EFFECT
//A PEN BY Dennis Garrn: https://codepen.io/dennisgarrn/pen/kHEKn
jQuery(document).ready(function () {
	$('h1').mousemove(function (e) {
		var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
		var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
		$('h1').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(155,169,235,1), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(255,255,255,1), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(255,255,255,.9)');
	});
});

