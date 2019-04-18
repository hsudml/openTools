var anchors = document.getElementsByTagName('h2');
for (var i = 0, len = anchors.length; i < len; i++) {
	var anchor = anchors[i];
	var anchorText = anchors[i].innerText;
	var anchorName = anchor.getAttribute('id');
	var menuList = document.getElementById('headerMenu');
	menuList.insertAdjacentHTML('beforeend', '<li><a href="#'+anchorName+'" class="menuLink">'+anchorText+'</a></li>');
}
