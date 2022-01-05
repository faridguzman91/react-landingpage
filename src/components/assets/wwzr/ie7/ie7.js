/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'wwzr\'">' + entity + '</span>' + html;
	}
	var icons = {
		'wwrz-icn-draw': '&#xe90f;',
		'wwrz-icn-projects': '&#xe916;',
		'wwrz-icn-units': '&#xe91e;',
		'wwrz-icn-publish': '&#xe931;',
		'wwrz-icn-polygon-edit': '&#xe932;',
		'wwrz-icn-user1': '&#xe933;',
		'wwrz-icn-fitscreen': '&#xe934;',
		'wwrz-icn-image-off': '&#xe935;',
		'wwrz-icn-image-replace': '&#xe936;',
		'wwrz-icn-image-on': '&#xe941;',
		'wwrz-icn-guide-off': '&#xe943;',
		'wwrz-icn-guide-on': '&#xe944;',
		'wwrz-icn-guide-add': '&#xe945;',
		'wwrz-icn-lines': '&#xe946;',
		'wwrz-icn-polygon-delete': '&#xe947;',
		'wwrz-icn-polygon-add': '&#xe94a;',
		'wwrz-icn-polygon': '&#xe94b;',
		'wwrz-icn-ion-android-camera': '&#xf2d3;',
		'wwrz-icn-ion-android-options': '&#xf39d;',
		'wwrz-icn-ion-android-unlock': '&#xf3b5;',
		'wwrz-icn-ion-arrow-left-c': '&#xf10c;',
		'wwrz-icn-ion-camera': '&#xf118;',
		'wwrz-icn-ion-checkmark': '&#xf122;',
		'wwrz-icn-ion-chevron-down': '&#xf123;',
		'wwrz-icn-ion-chevron-left': '&#xf124;',
		'wwrz-icn-ion-chevron-right': '&#xf127;',
		'wwrz-icn-ion-chevron-up': '&#xf128;',
		'wwrz-icn-ion-ios-calculator-outline': '&#xf3f1;',
		'wwrz-icn-ion-ios-calculator': '&#xf3f2;',
		'wwrz-icn-ion-ios-camera-outline': '&#xf3f5;',
		'wwrz-icn-ion-ios-paper-outline': '&#xf471;',
		'wwrz-icn-ion-ios-play-outline': '&#xf487;',
		'wwrz-icn-ion-ios-play': '&#xf488;',
		'wwrz-icn-ion-ios-unlocked-outline': '&#xf4c8;',
		'wwrz-icn-ion-ios-unlocked': '&#xf4c9;',
		'wwrz-icn-ion-locked': '&#xf200;',
		'wwrz-icn-ion-paper-airplane': '&#xf2c3;',
		'wwrz-icn-ion-social-buffer-outline': '&#xf228;',
		'wwrz-icn-ion-social-buffer': '&#xf229;',
		'wwrz-icn-ion-toggle-filled': '&#xf354;',
		'wwrz-icn-ion-toggle': '&#xf355;',
		'wwrz-icn-pdf': '&#xe803;',
		'wwrz-icn-nature': '&#xe810;',
		'wwrz-icn-move': '&#xe813;',
		'wwrz-icn-exchange': '&#xe815;',
		'wwrz-icn-download1': '&#xe81b;',
		'wwrz-icn-mail': '&#xe822;',
		'wwrz-icn-dorp': '&#xe825;',
		'wwrz-icn-bossen': '&#xe829;',
		'wwrz-icn-rooms': '&#xe844;',
		'wwrz-icn-fullscreen': '&#xe84b;',
		'wwrz-icn-fill-1': '&#xe856;',
		'wwrz-icn-zorg-1': '&#xe85a;',
		'wwrz-icn-voorzieninge': '&#xe85f;',
		'wwrz-icn-atletiek': '&#xe863;',
		'wwrz-icn-balsport': '&#xe864;',
		'wwrz-icn-bibliotheek': '&#xe865;',
		'wwrz-icn-brandweer': '&#xe866;',
		'wwrz-icn-gemeentehuis': '&#xe867;',
		'wwrz-icn-politiebureau': '&#xe868;',
		'wwrz-icn-racketsport': '&#xe869;',
		'wwrz-icn-zwemmen-': '&#xe86a;',
		'wwrz-icn-kavel-icon': '&#xe86d;',
		'wwrz-icn-settings': '&#xe86f;',
		'wwrz-icn-aanbod': '&#xe870;',
		'wwrz-icn-wwzr_am-check2': '&#xe927;',
		'wwrz-icn-wwzr_am-check': '&#xe924;',
		'wwrz-icn-wwzr_am-uncheck': '&#xe926;',
		'wwrz-icn-wwzr_am-shape': '&#xe91b;',
		'wwrz-icn-wwzr_am-style': '&#xe91c;',
		'wwrz-icn-wwzr_am-value': '&#xe91d;',
		'wwrz-icn-wwzr_kavel1': '&#xe919;',
		'wwrz-icn-wwzr_kavel2': '&#xe91a;',
		'wwrz-icn-wwzr_huis-zw': '&#xe911;',
		'wwrz-icn-wwzr_huis3': '&#xe917;',
		'wwrz-icn-wwzr_huis4': '&#xe918;',
		'wwrz-icn-wwzr-bijgebouw2': '&#xe90c;',
		'wwrz-icn-wwzr-download2': '&#xe90d;',
		'wwrz-icn-wwzr-huis-v2': '&#xe90e;',
		'wwrz-icn-wwzr-huis-v2-11': '&#xe910;',
		'wwrz-icn-wwzr-bijgebouw': '&#xe900;',
		'wwrz-icn-wwzr-download': '&#xe901;',
		'wwrz-icn-wwzr-huis-a': '&#xe902;',
		'wwrz-icn-wwzr-huis-v': '&#xe903;',
		'wwrz-icn-wwzr-puzzel-b': '&#xe909;',
		'wwrz-icn-wwzr-puzzel': '&#xe90a;',
		'wwrz-icn-wwzr-stelsamen': '&#xe90b;',
		'wwrz-icn-dashboard': '&#xe94c;',
		'wwrz-icn-eye2': '&#xe000;',
		'wwrz-icn-paper-clip': '&#xe001;',
		'wwrz-icn-toggle': '&#xe003;',
		'wwrz-icn-video': '&#xe018;',
		'wwrz-icn-search': '&#xe039;',
		'wwrz-icn-zoom-in': '&#xe037;',
		'wwrz-icn-zoom-out': '&#xe038;',
		'wwrz-icn-circle-plus': '&#xe040;',
		'wwrz-icn-circle-minus': '&#xe041;',
		'wwrz-icn-circle-check': '&#xe042;',
		'wwrz-icn-circle-cross': '&#xe043;',
		'wwrz-icn-repeat2': '&#xe058;',
		'wwrz-icn-cloud-upload': '&#xe066;',
		'wwrz-icn-cloud-download3': '&#xe067;',
		'wwrz-icn-upload': '&#xe068;',
		'wwrz-icn-download2': '&#xe069;',
		'wwrz-icn-location3': '&#xe070;',
		'wwrz-icn-box': '&#xe079;',
		'wwrz-icn-reload': '&#xe080;',
		'wwrz-icn-tag': '&#xe085;',
		'wwrz-icn-arrow-left2': '&#xe094;',
		'wwrz-icn-arrow-right2': '&#xe095;',
		'wwrz-icn-arrow-up2': '&#xe096;',
		'wwrz-icn-arrow-down2': '&#xe097;',
		'wwrz-icn-trash': '&#xe109;',
		'wwrz-icn-maximize': '&#xe112;',
		'wwrz-icn-minimize': '&#xe113;',
		'wwrz-icn-plus2': '&#xe114;',
		'wwrz-icn-minus2': '&#xe115;',
		'wwrz-icn-check2': '&#xe116;',
		'wwrz-icn-cross': '&#xe117;',
		'wwrz-icn-ellipsis': '&#xe129;',
		'wwrz-icn-edit': '&#xe01c;',
		'wwrz-icn-puzzle': '&#xe026;',
		'wwrz-icn-gears': '&#xe02b;',
		'wwrz-icn-key': '&#xe02c;',
		'wwrz-icn-tools': '&#xe033;',
		'wwrz-icn-tools-2': '&#xe034;',
		'wwrz-icn-paintbrush': '&#xe036;',
		'wwrz-icn-map-pin': '&#xe047;',
		'wwrz-icn-download': '&#xe04d;',
		'wwrz-icn-refresh': '&#xe05a;',
		'wwrz-icn-key2': '&#xe906;',
		'wwrz-icn-note-checked': '&#xe907;',
		'wwrz-icn-cloud-download2': '&#xe904;',
		'wwrz-icn-tag-add': '&#xe908;',
		'wwrz-icn-home3': '&#xe905;',
		'wwrz-icn-location': '&#xe91f;',
		'wwrz-icn-location2': '&#xe920;',
		'wwrz-icn-compass': '&#xe921;',
		'wwrz-icn-compass2': '&#xe922;',
		'wwrz-icn-floppy-disk': '&#xe923;',
		'wwrz-icn-office': '&#xe92f;',
		'wwrz-icn-paint-format': '&#xe930;',
		'wwrz-icn-phone': '&#xe942;',
		'wwrz-icn-bubble': '&#xe96b;',
		'wwrz-icn-bubble2': '&#xe96e;',
		'wwrz-icn-spinner3': '&#xe97c;',
		'wwrz-icn-lock': '&#xe98f;',
		'wwrz-icn-cog': '&#xe994;',
		'wwrz-icn-list-numbered': '&#xe9b9;',
		'wwrz-icn-list': '&#xe9ba;',
		'wwrz-icn-list2': '&#xe9bb;',
		'wwrz-icn-enter': '&#xea13;',
		'wwrz-icn-exit': '&#xea14;',
		'wwrz-icn-google-plus1': '&#xea8b;',
		'wwrz-icn-facebook1': '&#xea90;',
		'wwrz-icn-facebook2': '&#xea91;',
		'wwrz-icn-instagram1': '&#xea92;',
		'wwrz-icn-whatsapp': '&#xea93;',
		'wwrz-icn-file-pdf': '&#xeadf;',
		'wwrz-icn-file-word': '&#xeae1;',
		'wwrz-icn-libreoffice': '&#xeae3;',
		'wwrz-icn-star': '&#xf005;',
		'wwrz-icn-star-o': '&#xf006;',
		'wwrz-icn-user': '&#xf007;',
		'wwrz-icn-download3': '&#xf019;',
		'wwrz-icn-repeat3': '&#xf01f;',
		'wwrz-icn-rotate-right2': '&#xf01f;',
		'wwrz-icn-refresh2': '&#xf021;',
		'wwrz-icn-pencil': '&#xf040;',
		'wwrz-icn-trash2': '&#xf1f8;',
		'wwrz-icn-toggle-off': '&#xf204;',
		'wwrz-icn-toggle-on': '&#xf205;',
		'wwrz-icn-user-circle': '&#xf2bd;',
		'wwrz-icn-user-circle-o': '&#xf2be;',
		'wwrz-icn-user-o': '&#xf2c0;',
		'wwrz-icn-wwzr_bijgebouw3d': '&#xe929;',
		'wwrz-icn-wwzr_achterlinks': '&#xe92a;',
		'wwrz-icn-wwzr_achterrechts': '&#xe92b;',
		'wwrz-icn-wwzr_bijgebouwhuisje': '&#xe92c;',
		'wwrz-icn-wwzr_voorlinks': '&#xe92d;',
		'wwrz-icn-wwzr_voorrechts': '&#xe92e;',
		'wwrz-icn-wwzr_am-logo': '&#xe928;',
		'wwrz-icn-check': '&#xf00c;',
		'wwrz-icn-close': '&#xf00d;',
		'wwrz-icn-remove': '&#xf00d;',
		'wwrz-icn-times': '&#xf00d;',
		'wwrz-icn-search-plus': '&#xf00e;',
		'wwrz-icn-home': '&#xf015;',
		'wwrz-icn-repeat': '&#xf01e;',
		'wwrz-icn-rotate-right': '&#xf01e;',
		'wwrz-icn-check-square-o': '&#xf046;',
		'wwrz-icn-chevron-left': '&#xf053;',
		'wwrz-icn-chevron-right': '&#xf054;',
		'wwrz-icn-plus-circle': '&#xf055;',
		'wwrz-icn-minus-circle': '&#xf056;',
		'wwrz-icn-times-circle': '&#xf057;',
		'wwrz-icn-check-circle': '&#xf058;',
		'wwrz-icn-question-circle': '&#xf059;',
		'wwrz-icn-info-circle': '&#xf05a;',
		'wwrz-icn-times-circle-o': '&#xf05c;',
		'wwrz-icn-ban': '&#xf05e;',
		'wwrz-icn-arrow-left': '&#xf060;',
		'wwrz-icn-arrow-right': '&#xf061;',
		'wwrz-icn-arrow-up': '&#xf062;',
		'wwrz-icn-arrow-down': '&#xf063;',
		'wwrz-icn-expand': '&#xf065;',
		'wwrz-icn-plus': '&#xf067;',
		'wwrz-icn-minus': '&#xf068;',
		'wwrz-icn-eye': '&#xf06e;',
		'wwrz-icn-eye-slash': '&#xf070;',
		'wwrz-icn-chevron-up': '&#xf077;',
		'wwrz-icn-chevron-down': '&#xf078;',
		'wwrz-icn-shopping-cart': '&#xf07a;',
		'wwrz-icn-folder': '&#xf07b;',
		'wwrz-icn-folder-open': '&#xf07c;',
		'wwrz-icn-camera-retro': '&#xf083;',
		'wwrz-icn-linkedin-square': '&#xf08c;',
		'wwrz-icn-twitter': '&#xf099;',
		'wwrz-icn-facebook': '&#xf09a;',
		'wwrz-icn-facebook-f': '&#xf09a;',
		'wwrz-icn-wrench': '&#xf0ad;',
		'wwrz-icn-paperclip': '&#xf0c6;',
		'wwrz-icn-floppy-o': '&#xf0c7;',
		'wwrz-icn-save': '&#xf0c7;',
		'wwrz-icn-pinterest': '&#xf0d2;',
		'wwrz-icn-google-plus': '&#xf0d5;',
		'wwrz-icn-caret-down': '&#xf0d7;',
		'wwrz-icn-caret-up': '&#xf0d8;',
		'wwrz-icn-caret-left': '&#xf0d9;',
		'wwrz-icn-caret-right': '&#xf0da;',
		'wwrz-icn-linkedin': '&#xf0e1;',
		'wwrz-icn-lightbulb-o': '&#xf0eb;',
		'wwrz-icn-cloud-download': '&#xf0ed;',
		'wwrz-icn-building-o': '&#xf0f7;',
		'wwrz-icn-angle-left': '&#xf104;',
		'wwrz-icn-angle-right': '&#xf105;',
		'wwrz-icn-angle-up': '&#xf106;',
		'wwrz-icn-angle-down': '&#xf107;',
		'wwrz-icn-desktop': '&#xf108;',
		'wwrz-icn-laptop': '&#xf109;',
		'wwrz-icn-tablet': '&#xf10a;',
		'wwrz-icn-mobile': '&#xf10b;',
		'wwrz-icn-mobile-phone': '&#xf10b;',
		'wwrz-icn-spinner': '&#xf110;',
		'wwrz-icn-folder-o': '&#xf114;',
		'wwrz-icn-folder-open-o': '&#xf115;',
		'wwrz-icn-crop': '&#xf125;',
		'wwrz-icn-code-fork': '&#xf126;',
		'wwrz-icn-youtube': '&#xf167;',
		'wwrz-icn-dropbox': '&#xf16b;',
		'wwrz-icn-instagram': '&#xf16d;',
		'wwrz-icn-file-pdf-o': '&#xf1c1;',
		'wwrz-icn-paper-plane': '&#xf1d8;',
		'wwrz-icn-send': '&#xf1d8;',
		'wwrz-icn-paper-plane-o': '&#xf1d9;',
		'wwrz-icn-send-o': '&#xf1d9;',
		'wwrz-icn-object-group': '&#xf247;',
		'wwrz-icn-object-ungroup': '&#xf248;',
		'wwrz-icn-clone': '&#xf24d;',
		'wwrz-icn-map-o': '&#xf278;',
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
		c = c.match(/wwrz-icn-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
