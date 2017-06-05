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
    var canvas = document.createElement('canvas');

    // set div width, height and left
    canvas.style.width = (600 / data.length) + 'px';
    canvas.style.height = (400/Math.max(...data)  * data[i]) + 'px';
    canvas.style.left = (600 / data.length * i) + 'px';

    // add class to div to position it
    canvas.className += 'bar';

    // and add the div to the dom
    graph.appendChild(canvas);

}