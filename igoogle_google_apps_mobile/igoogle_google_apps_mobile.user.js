// ==UserScript==
// @name           iGoogle Google Apps
// @namespace      http://tlundberg.com
// @description    Look and feel enhancements for the iGoogle Google Apps mail gadget
// @include        https://mail.google.com/a/*/x/*/
// @include        http://mail.google.com/a/*/x/*/
// @include        https://mail.google.com/a/*/x/*/?
// @include        http://mail.google.com/a/*/x/*/?
// @include        https://mail.google.com/a/*/x/*/?f*
// @include        http://mail.google.com/a/*/x/*/?f*
// @include        https://mail.google.com/a/*/x/*/?a=cfa*
// @include        http://mail.google.com/a/*/x/*/?a=cfa*
// ==/UserScript==

/**
 * Set the folowing variable to your domain
 */

var yourDomain = 'tlundberg.com';

/**
 * Make the mobile gmail interface look good
 */
var body = document.getElementsByTagName('body')[0];

var style1 = document.createElement('style');
style1.innerHTML  = "body, div.msgrd a, div.msg a { font-size: 80%; }";
style1.innerHTML += "div.nav form {clear: both; padding-top: 10px; }";
style1.innerHTML += "div.nav a.navlnk { display: block !important; float: left; padding-right: 8px; }";
style1.innerHTML += "div.bkg select { margin-top: 3px; }";
style1.innerHTML += "div.nav { margin: -10px 0 0 0; padding: 0; }";

body.appendChild(style1);

var brs = document.getElementsByTagName('br');

for (var i = brs.length - 1; i >= 0; --i) {
	brs[i].parentNode.removeChild(brs[i]);
}

var lastNavDiv = document.getElementsByTagName('div');
lastNavDiv = lastNavDiv[lastNavDiv.length - 1];

lastNavDiv.parentNode.removeChild(lastNavDiv);

var logo = document.getElementsByTagName('img')[0];
if (logo.src == 'https://www.google.com/a/' + yourDomain + '/images/logo.gif') {
	logo.parentNode.removeChild(logo);
}

/**
 * Make it do new stuff
 */

function sendCanvasViewRequest(target, rnd, th) {
	var elm = document.createElement("igamhDataElement");
	elm.setAttribute('target', target);
	elm.setAttribute('rnd', rnd);
	elm.setAttribute('th', th);
	document.documentElement.appendChild(elm);

	var evt = document.createEvent("Events");
	evt.initEvent("gamToExtEvent", true, false);
	elm.dispatchEvent(evt);
}

var lnks = document.getElementsByTagName('a');

for each(var l in lnks) {
	setUpClickEvent(l);
}

//
// setUpClickEvent needs to be its own function, because each click event
// listener needs its own copy of the th variable
//
function setUpClickEvent(elm) {
	var rnd = '';
	var th = '';
	var rndthPart = '';

	if (elm.id && elm.id.substr(0, 3) == 'sub') {
		rndthPart = elm.href.substring('https://mail.google.com/a/' + yourDomain + '/x/'.length);
		rnd = rndthPart.substring(0, rndthPart.indexOf('/'));
		th = rndthPart.substring(rndthPart.indexOf('th=') + 3);

		// We don't need a handler for the link itself, the click event will
		// bubble up to the TD element and we'll handle it there
		elm.href = 'javascript:void(0)';

		if (elm.parentNode.nodeName == 'TD') {
			// remove old click event listener
			elm.parentNode.setAttribute("onclick", "");

			// add our own click event listener
			elm.parentNode.addEventListener("click", function(){sendCanvasViewRequest('thread', rnd, th);}, false);
		}
	} else if (elm.id && elm.id == 'bns0') {
		// Inbox link

		rndthPart = elm.href.substring('https://mail.google.com/a/' + yourDomain + '/x/'.length);
		rnd = rndthPart.substring(0, rndthPart.indexOf('/'));

		elm.href = 'javascript:void(0)';
		elm.addEventListener("click", function(){sendCanvasViewRequest('inbox', rnd, '');}, false);
	} else if (elm.id && elm.id == 'bnc') {
		// Compose link

		rndthPart = elm.href.substring('https://mail.google.com/a/' + yourDomain + '/x/'.length);
		rnd = rndthPart.substring(0, rndthPart.indexOf('/'));

		elm.href = 'javascript:void(0)';
		elm.addEventListener("click", function(){sendCanvasViewRequest('compose', rnd, '');}, false);
	}
}
