export function load_hotel_name(){
    var text = 'Beach Day Loading!';

    var chars = text.split('');
    var container = document.getElementById("container");
    
    var i = 0;
    setInterval(function () {
        if (i < chars.length) {
            container.innerHTML += chars[i++];
        } else {
            i = 0;
            container.innerHTML = "";
        }
    }, 1000);
}
