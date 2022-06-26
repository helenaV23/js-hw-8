let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = destination.concat(native, hero);

rainbow.reverse();
rainbow.shift();
rainbow.unshift("Richard");
rainbow.pop();
rainbow.push("Vain");
rainbow.splice(3, 0, "Gave","Battle");

let colors = ["red", "orange", "yellow", "green", "blue", "darkblue", "darkviolet"];
let htmlParts = [`<div class="wrapper">`];

for (let i = 0; i < colors.length; i++) {
    htmlParts.push(`
        <div>
            <div class="circle" style="background-color: ${colors[i]};"></div>
            <p class="title">${rainbow[i]}</p>
        </div>`
    );
}

htmlParts.push("</div>");

document.write(htmlParts.join(""));
