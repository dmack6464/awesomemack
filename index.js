function closeAlert() {
  var x = document.getElementById("alert");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleSidebar() {
  var x = document.getElementById("container");
  var y = document.getElementById("sidebar");
  if (x.style.paddingLeft === "0px") {
    x.style.paddingLeft = "201px";
    y.style.display = "block";
  } else {
    x.style.paddingLeft = "0px";
    y.style.display = "none";
  }
}
function toggleSidebarSide() {
	var x = document.getElementById("container");
	var y = document.getElementById("sidebar");
	if (y.style.right === "0px") {
		x.style.paddingRight = "unset";
		x.style.paddingLeft = "201px";
		y.style.right = "unset";
		y.style.left = "0";
	} else {
		x.style.paddingRight = "201px";
		x.style.paddingLeft = "unset";
		y.style.right = "0";
		y.style.left = "unset";
	}
}