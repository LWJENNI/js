
document.addEventListener("DOMContentLoaded", function () {

    fetch("https://raw.githubusercontent.com/LWJENNI/online/refs/heads/main/works.json")
        .then(response => response.json())
        .then(json => {
            let works = ``;
            let li = 0
            for (const element of json) {
                li++
                console.log(element)
                works += `
                <a href="${element.scr}" title="${element.title}" target="_blank" class="work" id="${element.id}">
                <span class="name" id="name">${element.name}</span>
                <span class="lore" id="lore">${element.lore}</span>
                <div class="writtenin" id="writtenin">
                    <img src="./svgs/css.svg" alt="CSS" height="24" width="24" class="img" style="display: ${element.writtenin.css == true ? "block" : "none"};">
                    <img src="./svgs/html.svg" alt="HTML" height="24" width="24" class="img" style="display: ${element.writtenin.html == true ? "block" : "none"};">
                    <img src="./svgs/js.svg" alt="JavaScript" height="24" width="24" class="img" style="display: ${element.writtenin.js == true ? "block" : "none"};">
                    <img src="./svgs/ts.svg" alt="TypeScript" height="24" width="24" class="img" style="display: ${element.writtenin.ts == true ? "block" : "none"};">
                </div>
                </a>
                `;
            }
            document.getElementById("works").innerHTML = `<h3>Список робіт: ${li}</h3>${works}`
            
        });
});
