"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#pesquisa-form > form");
const input = document.querySelector("#input-localizacao");
const sectionInfos = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    console.log("foii!!");
    if (!input || !sectionInfos)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("o local precisa ter, pelo menos, 3 letras.");
        return;
    }
    try {
        const resposta = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=00f61f25ce1310eea5718ed3afe39014&lang=pt_br&units=metric`);
        const dados = yield resposta.json();
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png
  `,
        };
        sectionInfos.innerHTML = `
            <div class="tempo-dados">
            <h2>${infos.local}</h2>
  
            <span>${infos.temperatura} °C</span>
          </div>
          <img src=${infos.icone} alt="nevoa" />
    `;
        input.value = "";
    }
    catch (err) {
        console.log("Deu um erro em obter os dados da API", err);
    }
}));
