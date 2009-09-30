// ==UserScript==
// @name           iGoogle Google Apps HTML
// @namespace      http://tlundberg.com
// @description    Look and feel enhancements for the iGoogle Google Apps mail gadget
// @include        http://mail.google.com/a/*/h/*
// @include        https://mail.google.com/a/*/h/*
// ==/UserScript==

var elm = document.getElementById('guser');
elm.parentNode.removeChild(elm);

elm = document.getElementById('gbar');
elm.parentNode.removeChild(elm);

elm = document.getElementsByTagName('table')[0];
elm.parentNode.removeChild(elm);

elm = document.getElementsByClassName('bn')[0];
elm.parentNode.removeChild(elm);

elm = document.getElementsByClassName('ft')[0].getElementsByTagName('tr')[2];
elm.parentNode.removeChild(elm);

elm = document.getElementsByTagName('table')[0].childNodes[1].firstChild.childNodes[1];
elm.parentNode.removeChild(elm);
