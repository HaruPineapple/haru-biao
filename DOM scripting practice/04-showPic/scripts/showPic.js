function showPic(whichPic) {
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var disc = document.getElementById('discription');
    var text=whichPic.getAttribute('title');
    placeholder.setAttribute('src', source);
    disc.firstChild.nodeValue=text;
}
