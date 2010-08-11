iGoogle Google Apps Mail integration
====================================

About
-----

Incorporate Google Apps Mail for hosted domain(s) into your iGoogle Start
Page. By using standard Google Mobile Services you only need to set your
Google Apps domain and the Google Apps sign-on is used. Multiple instances of
the gadget are allowed to support multiple domains.

This gadget would not have been created without the excelent work by Big Russ

Screenshots
-----------

### Mobile gmail in iGoogle as it has been done before: ###

Plain "mobile gmail in an iframe":

![Mobile gmail displayed in a simple iframe igoogle-gadget](readme_images/no_igam_gadget.png)


Scrolling down to see the rest of it you get this:

![Rest of "plain mobile gmail in an iframe" interface](readme_images/no_igam_gadget2.png)


This is what you get if you click on a subject to read the messages:

![Mobile message view](readme_images/no_igam_message.png)


To compose a message, this is what you have to work with:

![Mobile compose message view](readme_images/no_igam_compose.png)


### Gmail in iGoogle as I've done it: ###


Usage
-----

To get this to work you need four things:
1.  The iGoogle gadget needs to be added to your iGoogle page. Find the "Add by
        URL" option in iGoogle and use this url:
		http://github.com/Tobbe/igam/raw/master/igam_gadget.xml 
2.  A [Greasemonkey](http://www.greasespot.net/) script for the mobile gmail
        interface has been created. First install Greasemonkey if you don't
		already have it, then install [the script](http://github.com/Tobbe/igam/raw/master/igoogle_google_apps_mobile/igoogle_google_apps_mobile.user.js) by clicking on the link.
3.  There is [another Greasemonkey script](http://github.com/Tobbe/igam/raw/master/igoogle_google_apps_html/igoogle_google_apps_html.user.js) that you need for the gmail html interface.
4.  To make it all work together you need a firefox extension called simply [iGoogle Apps Mail Helper](http://github.com/Tobbe/igam/tree/master/igamh/). Click on that link for further installation instructions for the extension.

