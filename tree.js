var splash = document.getElementById('splash');
var ctx_splash = splash.getContext ("2d");

var leaf = document.getElementById ( "leaf" );
var ctx_leaf = leaf.getContext ("2d");

var treebody = document.getElementById ( "treebody" );
var ctx_treebody = treebody.getContext ("2d");


var shadow_leaf = document.getElementById ( "shadow_leaf" );
var ctx_shadow_leaf = shadow_leaf.getContext ("2d");

var shadow_treebody = document.getElementById ( "shadow_treebody" );
var ctx_shadow_treebody = shadow_treebody.getContext ("2d");

ctx_shadow_leaf.lineCap = 'round'
ctx_shadow_leaf.lineWidth=[1];
// ctx_leaf.strokeStyle = 'green'


ctx_shadow_treebody.lineCap = 'round'
ctx_shadow_treebody.lineWidth=[1];
// ctx_treebody.strokeStyle = 'rgb(79, 37, 5)'

ctx_leaf.lineCap = 'round'
ctx_leaf.lineWidth=[1];
// ctx_leaf.strokeStyle = 'green'


ctx_treebody.lineCap = 'round'
ctx_treebody.lineWidth=[1];
// ctx_treebody.strokeStyle = 'rgb(79, 37, 5)'


function random_r(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function random_g(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function random_b(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function random_line(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


var x = 0


function check () {
    if (x > 500) {
        clearInterval(draw);
        document.removeEventListener("mousedown", count)
        // mouse_sroll ()
        // mouse_eve ()
        blnk = setInterval(function() {
            drw_treebody ()
            drw_leaf ()
        }, 100); 
        blnk_line = setInterval(function() {
            drw_line ()
        }, 400);
    } 
}

const count = (e) =>  {
    draw = setInterval(function() {
        ctx_treebody.strokeStyle =  "rgb(" + random_r(50, 90)+ "," + random_g(10, 60) + "," + random_b(10, 40) + ")"
        const leaf_x1 = Math.floor(Math.random() * 2001);
        const leaf_x2 = Math.floor(Math.random() * 2001);
        const leaf_y1 = Math.floor(Math.random() * 2001);
        const leaf_y2 = Math.floor(Math.random() * 2001);
        ctx_treebody.beginPath();
        ctx_treebody.moveTo(leaf_x1, leaf_y1);
        ctx_treebody.lineTo(leaf_x2, leaf_y2);
        ctx_treebody.stroke();
        ctx_leaf.strokeStyle =  "rgb(" + random_r(0, 40)+ "," + random_g(75, 150) + "," + random_b(0, 60) + ")"
        const treebody_x1 = Math.floor(Math.random() * 2001);
        const treebody_x2 = Math.floor(Math.random() * 2001);
        const treebody_y1 = Math.floor(Math.random() * 1001);
        const treebody_y2 = Math.floor(Math.random() * 1001);
        ctx_leaf.beginPath();
        ctx_leaf.moveTo(treebody_x1, treebody_y1);
        ctx_leaf.lineTo(treebody_x2, treebody_y2);
        ctx_leaf.stroke();
        ctx_shadow_treebody.strokeStyle = "rgba(0, 0, 0," + Math.random() + ")"
        ctx_shadow_leaf.strokeStyle = "rgba(0, 0, 0," + Math.random() + ")"
        ctx_shadow_leaf.beginPath();
        ctx_shadow_leaf.moveTo(treebody_x1, treebody_y1);
        ctx_shadow_leaf.lineTo(treebody_x2, treebody_y2);
        ctx_shadow_leaf.stroke();
        ctx_shadow_treebody.beginPath();
        ctx_shadow_treebody.moveTo(leaf_x1, leaf_y1);
        ctx_shadow_treebody.lineTo(leaf_x2, leaf_y2);
        ctx_shadow_treebody.stroke();

        x = x + 1
        check ()
    }, 10);
}



document.addEventListener("mousedown", count);


document.addEventListener("mouseup", function () {
    clearInterval(draw);
});

document.addEventListener("dragend", function () {
    clearInterval(draw);
});


function drw_line () {
    line.clearRect(0, 0, 10000, 10000);
    const opacity_line = Math.random()
    const move_x1 = random_line(30, 60)
    const move_x2 = random_line(30, 60)
    const move_x3 = random_line(30, 60)
    const move_x4 = random_line(30, 60)
    const move_y1 = random_line(100, 150)
    const move_y2 = random_line(150, 300)
    const move_y3 = random_line(300, 450)
    const move_y4 = random_line(450, 500)
    _line.style.opacity = opacity_line
    line.beginPath();
    line.moveTo(0, 50);
    line.lineTo(move_y1, move_x1)
    line.lineTo(move_y2, move_x2)
    line.lineTo(move_y3, move_x3)
    line.lineTo(move_y4, move_x4)
    line.lineTo(600, 100);
    line.stroke();
}

 


function drw_treebody () {
    ctx_treebody.clearRect(0, 0, 10000, 10000);
    ctx_shadow_treebody.clearRect(0, 0, 10000, 10000);
    for (var x = 0 ; x < 1000 ; x++ ) {
    ctx_treebody.strokeStyle =  "rgba(" + random_r(50, 90)+ "," + random_g(10, 60) + "," + random_b(10, 40) + ")"
    ctx_shadow_treebody.strokeStyle = "rgba(0, 0, 0," + Math.random() + ")"
    const x1 = Math.floor(Math.random() * 2001);
    const x2 = Math.floor(Math.random() * 2001);
    const y1 = Math.floor(Math.random() * 2001);
    const y2 = Math.floor(Math.random() * 2001);
    ctx_treebody.beginPath();
    ctx_treebody.moveTo(x1, y1);
    ctx_treebody.lineTo(x2, y2);
    ctx_treebody.stroke();   
    ctx_shadow_treebody.beginPath();
    ctx_shadow_treebody.moveTo(x1, y1);
    ctx_shadow_treebody.lineTo(x2, y2);
    ctx_shadow_treebody.stroke();
    }
}

function drw_leaf () {
    ctx_leaf.clearRect(0, 0, 10000, 10000);
    ctx_shadow_leaf.clearRect(0, 0, 10000, 10000);
    for (var x = 0 ; x < 500 ; x++ ) {
    ctx_leaf.strokeStyle =  "rgb(" + random_r(0, 40)+ "," + random_g(75, 150) + "," + random_b(0, 60) + ")"
    ctx_shadow_leaf.strokeStyle = "rgba(0, 0, 0," + Math.random() + ")"
    const x1 = Math.floor(Math.random() * 2001);
    const x2 = Math.floor(Math.random() * 2001);
    const y1 = Math.floor(Math.random() * 1001);
    const y2 = Math.floor(Math.random() * 1001);
    ctx_leaf.beginPath();
    ctx_leaf.moveTo(x1, y1);
    ctx_leaf.lineTo(x2, y2);
    ctx_leaf.stroke();
    ctx_shadow_leaf.beginPath();
    ctx_shadow_leaf.moveTo(x1, y1);
    ctx_shadow_leaf.lineTo(x2, y2);
    ctx_shadow_leaf.stroke();
    }
}

leaf.style.opacity = 1
treebody.style.opacity = 1

   
   
//클릭  동안 이벤트 
function mouse_eve () {
    document.addEventListener("mousedown", function () {
        leaf.style.opacity = 1
        treebody.style.opacity = 1
        drw_treebody ()
        drw_leaf ()
        drw_line ()
        blnk = setInterval(function() {
            drw_treebody ()
            drw_leaf ()
        }, 100); 
        blnk_line = setInterval(function() {
            drw_line ()
        }, 400);
        document.addEventListener("dragend", function () {
            clearInterval(blnk_line);
            clearInterval(blnk);
        })
        document.addEventListener("mouseup", function () {
            clearInterval(blnk_line);
            clearInterval(blnk);
        })
    })
}


// // 스크롤시 이벤트 
// function mouse_sroll () {
//     document.addEventListener("scroll", function () {
//         drw_treebody ()
//         drw_leaf ()
//         blnk = setInterval(function() {
//             drw_treebody ()
//             drw_leaf ()
//         }, 100);
//     })      
    
//     document.addEventListener("dragend", function () {
//         clearInterval(blnk);
//     })
    
//     document.addEventListener("mouseup", function () {
//         clearInterval(blnk);
//     })
    
//     document.addEventListener("scroll", function () {
//         clearInterval(blnk);
//     })
// }


// 반영 모션및 디자인


var _line = document.getElementById ( "line" );
var line = _line.getContext ("2d");

line.lineCap = 'round'
line.lineWidth=[3];












// splash.addEventListener("click", (e) => {
//     mouse_X = e.offsetX
//     mouse_Y = e.offsetY
//     ctx_splash.beginPath();
//     ctx_splash.moveTo(mouse_X, mouse_Y+100);
//     ctx_splash.lineTo(mouse_X+random_line(0, 10), mouse_Y+random_line(80, 100));
//     ctx_splash.lineTo(mouse_X+random_line(10, 20), mouse_Y+random_line(60, 80));
//     // ctx_splash.lineTo(mouse_X+100, mouse_Y);
//     // ctx_splash.lineTo(mouse_X, mouse_Y-100);
//     // ctx_splash.lineTo(mouse_X-100, mouse_Y);
//     ctx_splash.stroke();
// })

