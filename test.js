window.onload = getFollowers();
setTimeout(function () {
    getFollowing();
           }, 500);





function getFollowers() {
var url = window.location.href;
var user1 = url.substring(30,60);
var user = user1.replace('/', '');
var user = user.replace('#comments-', '');
var user = user.replace(/[0-9]/g, '');
console.log("World_Languages' followers number shower:  username is" + user);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://scratch.mit.edu/users/' + user + '/followers/', false );
xmlHttp.send( null );
var response  = xmlHttp.responseText;
var find = response.search("Followers");
var find2 = (response.substring(find+11,find+17));
var follownum = find2.replace(/\D/g,'');

var a = '<h4>Followers (' + follownum + ')</h4> <a href="/users/' + user + '/followers/" data-control="viewall">View all</a>';
var b = document.getElementsByClassName("box-head");
b[6].innerHTML = a;}







function getFollowing() {
var url = window.location.href;
var user1 = url.substring(30,60);
var user = user1.replace('/', '');
var user = user.replace('#comments-', '');
var user = user.replace(/[0-9]/g, '');
console.log("World_Languages' followers number shower:  username is" + user);

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://scratch.mit.edu/users/' + user + '/following/', false );
xmlHttp.send( null );
var response  = xmlHttp.responseText;
var find = response.search("Following");
var find2 = (response.substring(find+11,find+17));
var follownum = find2.replace(/\D/g,'');

var a = '<h4>Following (' + follownum + ')</h4> <a href="/users/' + user + '/following/" data-control="viewall">View all</a>';
var b = document.getElementsByClassName("box-head");
b[5].innerHTML = a;}

