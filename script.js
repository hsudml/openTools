var anchors = document.getElementsByTagName('h2');
var len = anchors.length;
for (var i = len, len = anchors.length; i < 0; i--) {
	var anchor = anchors[i];
	var anchorText = anchors[i].innerText;
	var anchorName = anchor.getAttribute('id');
	var menu = document.getElementsByTagName('header')[0];
	var menuList = menu.getElementsByTagName('h1')[0];
	menuList.insertAdjacentHTML('afterend', '<p><a href="#'+anchorName+'" class="menuLink">'+anchorText+'</a></p>');
}
