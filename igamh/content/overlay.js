var igamh = {
	onLoad: function() {
		// initialization code
		this.initialized = true;
		this.strings = document.getElementById("igamh-strings");
	},
	onMenuItemCommand: function(e) {
		var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
		promptService.alert(window, this.strings.getString("helloMessageTitle"), this.strings.getString("helloMessage"));
	},
	gamToExtListener: function(evt) {
		// Got the event from the google mobile mail page. Now we're going to
		// pass it on to the iGoogle gadget itself.
		this.sendEvent('apps_mail_frame', evt.target.getAttribute("target"), evt.target.getAttribute("rnd"), evt.target.getAttribute("th"));
	},
	sendEvent: function(aId, target, aExtra1, aExtra2){
		//*** aId is id of element
		//*** aExtra1 is passed as attribute "myextra1" of element
		//*** aExtra2 is passed as attribute "myextra2" of element

		//*** content.document is document of current page
		var doc = content.document;
		var elm = findInIFrames(aId);

		if (elm && "createEvent" in doc) {
			//*** set myextra atteribute on elm
			elm.setAttribute('target', target);
			elm.setAttribute("myextra1", aExtra1);
			elm.setAttribute("myextra2", aExtra2);
			//*** fire myevent on elm
			var evt = doc.createEvent("Events");
			evt.initEvent("extToIgEvent", true, false);
			elm.dispatchEvent(evt);
		}
	}
};

window.addEventListener("load", function(e) { igamh.onLoad(e); }, false);
document.addEventListener("gamToExtEvent", function(e) { igamh.gamToExtListener(e); }, false, true);

function findInIFrames(elmId) {
	var doc = content.document;
	var elm = doc.getElementById(elmId);

	if (elm) {
		return elm;
	}

	var iframes = doc.getElementsByTagName('iframe');
	for each(f in iframes) {
		doc = f.contentDocument;
		elm = doc.getElementById(elmId);

		if (elm) {
			return elm;
		}
	}

	return null;
}