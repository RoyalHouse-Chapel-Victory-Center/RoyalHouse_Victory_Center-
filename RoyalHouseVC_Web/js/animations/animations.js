//	Animations v1.4, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	==================================================================================

function animateElement(){jQuery(".animate").each(jQuery(window).width()>=960?function(a,n){var n=jQuery(n),i=jQuery(this).attr("data-anim-type"),t=jQuery(this).attr("data-anim-delay");n.visible(!0)&&setTimeout(function(){n.addClass(i)},t)}:function(a,n){var n=jQuery(n),i=jQuery(this).attr("data-anim-type"),t=jQuery(this).attr("data-anim-delay");setTimeout(function(){n.addClass(i)},t)})}function randomClass(){var a=Math.ceil(Math.random()*classAmount);return classesArray[a]}function animateOnce(a,n){"random"==n&&(n=randomClass()),jQuery(a).removeClass("trigger infinite "+triggerClasses).addClass("trigger").addClass(n).one("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){jQuery(this).removeClass("trigger infinite "+triggerClasses)})}function animateInfinite(a,n){"random"==n&&(n=randomClass()),jQuery(a).removeClass("trigger infinite "+triggerClasses).addClass("trigger infinite").addClass(n).one("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){jQuery(this).removeClass("trigger infinite "+triggerClasses)})}function animateEnd(a){jQuery(a).removeClass("trigger infinite "+triggerClasses)}jQuery(document).ready(function(){jQuery("html").hasClass("no-js")&&jQuery("html").removeClass("no-js").addClass("js"),animateElement()}),jQuery(window).on( 'resize',function(){animateElement()}),jQuery(window).on( 'scroll',function(){animateElement(),jQuery(window).scrollTop()+jQuery(window).height()==jQuery(document).height()&&animateElement()});var triggerClasses="flash strobe shakeH shakeV bounce tada wave spinCW spinCCW slingshotCW slingshotCCW wobble pulse pulsate heartbeat panic",classesArray=new Array,classesArray=triggerClasses.split(" "),classAmount=classesArray.length;