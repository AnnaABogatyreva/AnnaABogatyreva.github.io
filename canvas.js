function drawNet() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        var sx = canvas.clientWidth / 2; // смещение по x
        var sy = canvas.clientHeight / 2; // смещение по y
        var sm = 20; // количество пикселей на 1 сантиметр

        ctx.clearRect(0, 0, 2 * sx, 2 * sy); // очистить поле

        //--------------------сетка--------------------//

        ctx.strokeStyle = "grey";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, sy);
        ctx.lineTo(sx * 2, sy);
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx, sy * 2);
        ctx.stroke();

        ctx.font = "18px Verdana";
        ctx.textAlign = "right";
        ctx.fillText("X", sx * 2, sy);
        ctx.textBaselinе = "bottom";
        ctx.fillText("Y", sx, 0);
        
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        for (var i = sx; i <= sx * 2; i += sm) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, sy * 2);
        }
        for (var i = sx; i >= 0; i -= sm) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, sy * 2);
        }
        for (var j = sy; j <= sy * 2; j += sm) {
            ctx.moveTo(0, j);
            ctx.lineTo(sx * 2, j);
        }
        for (var j = sy; j >= 0; j -= sm) {
            ctx.moveTo(0, j);
            ctx.lineTo(sx * 2, j);
        }
        ctx.stroke();
    }
}

function drawGraph() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        var sx = canvas.clientWidth / 2; // смещение по x
        var sy = canvas.clientHeight / 2; // смещение по y
        var sm = 20; // количество пикселей на 1 сантиметр

        //--------------------график--------------------//

        // y = ax^2 + bx + c
        var a = document.getElementById("ia").value;
        var b = document.getElementById("ib").value;
        var c = document.getElementById("ic").value;

        a = a / sm;
        c = c * sm;

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var x = -sx; x <= sx; x++) {
            var y = a * x * x + b * x + c;
            ctx.lineTo(sx + x, sy - y);
        }
        ctx.stroke();
    }
}