
document.addEventListener("DOMContentLoaded", function () {

    fetch("https://raw.githubusercontent.com/LWJENNI/online/refs/heads/main/works.json")
        .then(response => response.json())
        .then(json => {
            let works = ``;
            let li = 0
            json = [
                {
                    "id": "tictactoe",
                    "scr": "/works/tictactoe.html",
                    "title": "Крестики нолики",
                    "name": "Крестики нолики",
                    "description": "Гра для 1 людини з ІІ",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "text",
                    "scr": "/works/text.html",
                    "title": "Текст",
                    "name": "Текст",
                    "description": "Текст, який з'являється за умовою",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "table",
                    "scr": "/works/table.html",
                    "title": "Таблиця множення",
                    "name": "Таблиця множення",
                    "description": "Таблиця множення та ступінь числа",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "format",
                    "scr": "/works/formation.html",
                    "title": "Форматування",
                    "name": "Топ із країн",
                    "description": "Топ",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "factorial",
                    "scr": "/works/factorial.html",
                    "title": "Факторіал",
                    "name": "Факторіал",
                    "description": "Обчислення факторіала числа",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "generatoremojis",
                    "scr": "/works/generatoremoji.html",
                    "title": "Генератор Емодзі",
                    "name": "Емодзі",
                    "description": "Генератор емодзі!",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "seasons",
                    "scr": "/works/seasons.html",
                    "title": "Пори року",
                    "name": "Пори року",
                    "description": "Пори року, місяці",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "calculator",
                    "scr": "/works/calculator.html",
                    "title": "Калькулятор",
                    "name": "Калькулятор",
                    "description": "Калькулятор года",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "numbers",
                    "scr": "/works/numbers.html",
                    "title": "циферрки",
                    "name": "Скільки цифр у числі",
                    "description": "числа цифра каво",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "login",
                    "scr": "/works/lopin.html",
                    "title": "Регестрація",
                    "name": "Регестрація",
                    "description": "Гарна Регестрація!",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "sha",
                    "scr": "/works/chessboard.html",
                    "title": "Шахова дошка",
                    "name": "Шахова дошка",
                    "description": "На 99% із canvas",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "loving",
                    "scr": "/works/loving.html",
                    "title": "Ялинка",
                    "name": "Ялинка",
                    "description": "Ялинка з проклятих canvas",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "text2",
                    "scr": "/works/text2.html",
                    "title": "Текст 2",
                    "name": "Текст 2",
                    "description": "Текст на canvas",
                    "writtenIn": ["css", "html", "js"]
                },
                {
                    "id": "surcl",
                    "scr": "/works/surcl.html",
                    "title": "3D",
                    "name": "3D",
                    "description": "Бібліотека на допомогу!",
                    "writtenIn": ["css", "html", "js"]
                }
            ];

            for (const element of json) {
                li++
                console.log(element)
                works += `
                <a href="/js/${element.scr}" title="${element.title}" target="_blank" class="work" id="${element.id}">
                <span class="name" id="name">${element.name}</span>
                <span class="lore" id="lore">${element.description}</span>
                <div class="writtenin" id="writtenin">
                    <img src="./svgs/css.svg" alt="CSS" height="24" width="24" class="img" style="display: ${element.writtenIn.includes("css") == true ? "block" : "none"};">
                    <img src="./svgs/html.svg" alt="HTML" height="24" width="24" class="img" style="display: ${element.writtenIn.includes("html") == true ? "block" : "none"};">
                    <img src="./svgs/js.svg" alt="JavaScript" height="24" width="24" class="img" style="display: ${element.writtenIn.includes("js") == true ? "block" : "none"};">
                    <img src="./svgs/ts.svg" alt="TypeScript" height="24" width="24" class="img" style="display: ${element.writtenIn.includes("ts") == true ? "block" : "none"};">
                </div>
                </a>
                `;
            }
            document.getElementById("works").innerHTML = `<h3>Список робіт: ${li}</h3>${works}`

        });
});

function setting(name) {
    const type = document.getElementById("setting-text").innerText
    const typesize = {
        "auto": [50, "normal"],
        "normal": [100, "big"],
        "big": [10, "small"],
        "small": ["auto", "auto"]
    };
    if (name == 'text') {
        console.log(typesize[type]);
        document.getElementById("setting-text").innerText = `${typesize[type][1]}`;
        document.documentElement.style.setProperty("--main-size", typesize[type][0]);


    }
}
