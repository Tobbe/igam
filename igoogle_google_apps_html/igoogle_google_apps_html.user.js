// ==UserScript==
// @name           iGoogle Google Apps HTML
// @namespace      http://tlundberg.com
// @description    Look and feel enhancements for the iGoogle Google Apps mail gadget
// @include        http://mail.google.com/a/*/h/*
// @include        https://mail.google.com/a/*/h/*
// ==/UserScript==

// Top bar, right half
var elm = document.getElementById('guser');
elm.parentNode.removeChild(elm);

// Top bar, left half
elm = document.getElementById('gbar');
elm.parentNode.removeChild(elm);

// Search and logo
elm = document.getElementsByTagName('table')[0];
elm.parentNode.removeChild(elm);

// Navigation links (left column)
elm = document.getElementsByTagName('table')[0].childNodes[1].firstChild.childNodes[1];
elm.parentNode.removeChild(elm);

// Bottom info text
elm = document.getElementsByTagName('table')[5];
elm.parentNode.removeChild(elm);

if (currentPageIsTheInbox()) {
	makeSenderAndDateClickable();
}


function currentPageIsTheInbox() {
	return location.href.match(/^https?:\/\/mail\.google\.com\/a\/\w+\.\w+\/h\/\w+\/\?$/) != null;
}

function makeSenderAndDateClickable() {
	var emailRows = document.getElementsByTagName('table')[3].getElementsByTagName('tr');
	for (i = 0; i < emailRows.length; i++) {
		var emailLink = emailRows[i].childNodes[5].getElementsByTagName('a')[0];
		var columns = emailRows[i].getElementsByTagName('td');
		for (j = 1; j < 4; j++) {
			columns[j].addEventListener("click", function (lnk) { return function () { location.href = lnk; } }(emailLink), false);
			columns[j].style.cursor = 'pointer';
		}
	}
}