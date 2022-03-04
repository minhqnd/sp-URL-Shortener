var app;
var title = document.getElementById('title');
var cc1 = window.location.href.lastIndexOf("/");
var cc2 = cc1 + 1;
if (cc2 > 2) {
    var cc3 = window.location.href.slice(cc2);
    var cc4 = decodeURI(cc3);
    console.log('Đang tìm url "' + cc4 + '" để redirect...');
    url();
	console.log(cc4)
} else {
    load.style.display = "none";
	document.title = '404 Not Found';
}

function url() {
    var url = firebase.database().ref('shortenurl/' + cc4 + '/url');
    url.on("value", function(snapshot) {
        if (snapshot.exists()) {
            //clickcouter
            firebase.database().ref('shortenurl/' + cc4 + '/click').set(firebase.database.ServerValue.increment(1));
            console.log(snapshot.val());
            window.open(snapshot.val(), "_self");
        } else {
			load.style.display = "none";
			document.title = '404 Not Found';
            console.log('Không tồn tại url để redirect')
        }
    }, function(error) {
        console.log("Error: " + error.code);
    });
}
