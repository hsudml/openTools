var anchors = document.getElementsByTagName('h2');
for (var i = 0, len = anchors.length; i < len; i++) {
    var anchor = anchors[i];
    var anchorText = anchors[i].innerText;
    var anchorName = anchor.getAttribute('id');
    var menu = document.getElementsByTagName('header')[0];
	var menuList = menu.getElementsByTagName('h1')[0];
//console.log(menu);
	//menuList.innerHTML += '<p><a href="'+anchorName+'">'+anchorText+'</a></p>';
	menuList.insertAdjacentHTML('afterend', '<p><a href="'+anchorName+'" class="menuLink">'+anchorText+'</a></p>');
}
