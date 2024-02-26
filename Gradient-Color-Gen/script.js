let color1 = document.getElementById( "1color" );
let color2 = document.getElementById( "2color" );

let gradient_box = document.getElementById("gradient-box");
let color_code = document.getElementById("color-code");

function GradientChange(){

    gradient_box.style.background = `linear-gradient(45deg, ${color1.value}, ${color2.value})`
    color_code.value = `${gradient_box.style.background}`
}

color1.addEventListener('input', GradientChange);
color2.addEventListener('input', GradientChange);