function floor(sw) {
    var pic;
    if (sw == 0) {
        pic = "./floor images/0.png"
    } 
    if (sw == 1) {
        pic = "./floor images/1.png"
    }
    if (sw == 2) {
        pic = "./floor images/2.png"
    }
    document.getElementById('map').src = pic;
}