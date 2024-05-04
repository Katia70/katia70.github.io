window.onload = function() {
    var colors = ['#ff0000', '#ff99ff', '#33cc33', '#003300', '#ffccff', '#ffcc00', '#0066ff', '#66ff99'];
    var btnChangeBackground = document.getElementById('btnChangeBackground');

    btnChangeBackground.addEventListener('click', function() {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
}
