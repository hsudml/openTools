var anchors = document.getElementsByTagName('h2');
for (var i = 0, len = anchors.length; i < len; i++) {
	var anchor = anchors[i];
	var anchorText = anchors[i].innerText;
	var anchorName = anchor.getAttribute('id');
	var menuList = document.getElementById('headerMenu');
	menuList.insertAdjacentHTML('beforeend', '<li><a href="#'+anchorName+'" class="menuLink">'+anchorText+'</a></li>');
}

const articles = document.querySelectorAll('h2');

[].forEach.call(articles, a => {
  var org_html = a.innerHTML;
  new_html = "<div class='redact'>" + org_html + "</div>";
  a.innerHTML = new_html;
});
