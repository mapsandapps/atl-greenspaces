Atlanta Greenspaces Map
=======================

This is the source of http://mollietaylor.com/skills/js/leaflet/atl-greenspaces/, a collaboration of Mollie Taylor and Jonah McDonald.

What the files are
------------------
* index.html: Maps the hikes in Jonah's book/app, the hikes we add to the blog, and the location of champion trees.
* book.js: GeoJSON data of the hikes in the book.
* parks.js: GeoJSON data of the hikes not in the book.
* mini.html: Allows you to make a fake map to insert within a page. The fake map takes whatever coordinates you insert into the URL and creates a map with a marker at that coordinate point and zooms to the point. For example:
```
<iframe src="http://mollietaylor.com/skills/js/leaflet/atl-greenspaces/mini.html?33.809926,-84.486387" height="400" width="400"></iframe>
```
To see this in use, [click here](http://hikingatlanta.com/atlanta-greenspaces/whittier-mills-park/).
