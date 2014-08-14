/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Miraath07\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ico-grid': '&#xe600;',
		'ico-mute': '&#xf080;',
		'ico-play': '&#xe601;',
		'ico-pause': '&#xe602;',
		'ico-grid2': '&#xe604;',
		'ico-volume2': '&#xe629;',
		'ico-music': '&#xe605;',
		'ico-arrow-left': '&#xe606;',
		'ico-uniE607': '&#xe607;',
		'ico-th-small-outline': '&#xe603;',
		'ico-th': '&#xe608;',
		'ico-random': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ico-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
