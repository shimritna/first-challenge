/**
 * Created by zivlevy on 26/05/2017.
 */


// graph data
var data = [50, 82, 30, 70, 5, 90, 12];

// get graph element
var graph = document.getElementById('graph');

// create bars for each graph data element
for (i=0; i<data.length;i++){
    // create div
    var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

    // set div width, height and left
    rect.setAttributeNS(null,'width',(600 / data.length) + 'px');
    rect.setAttributeNS(null,"height",(400/Math.max(...data)  * data[i]) + 'px');
    rect.setAttributeNS(null,"x", (600 / data.length * i) + 'px');
    var yPos = 400 - (400/Math.max(...data)  * data[i]);
    rect.setAttributeNS(null,"y", yPos + 'px');

    // and add the div to the dom
    graph.appendChild(rect);

}