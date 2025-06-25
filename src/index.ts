const form = document.querySelector("#pesquisa-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");
const sectionInfos = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("foii!!");

  if (!input || !sectionInfos) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("o local precisa ter, pelo menos, 3 letras.");
    return;
  }

  try {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=00f61f25ce1310eea5718ed3afe39014&lang=pt_br&units=metric`
    );
    const dados = await resposta.json();

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
  } catch (err) {
    console.log("Deu um erro em obter os dados da API", err);
  }
});
