# Previsão do Tempo

Esta é uma aplicação web simples que permite aos usuários verificar a temperatura e as condições climáticas de uma localização específica, utilizando a API OpenWeatherMap.

---

## Tecnologias Utilizadas

- **TypeScript:** A linguagem de programação principal para a lógica do frontend.
- **API OpenWeatherMap:** A fonte de dados climáticos, permitindo buscar informações em tempo real.

---

## Funcionalidades

- **Pesquisa por Localização:** Permite ao usuário inserir o nome de uma cidade para obter as condições climáticas.

---

## Configuração da API (Importante para Desenvolvimento)

Esta aplicação se conecta à **API OpenWeatherMap** para buscar os dados do clima. No código atual, a chave de API (`00f61f25ce1310eea5718ed3afe39014`) está diretamente visível.

**Em um ambiente de produção ou para fins de segurança, é crucial que você não exponha sua chave de API diretamente no código do frontend.** Para este projeto simples, ela foi mantida assim para facilidade de uso, mas esteja ciente das melhores práticas de segurança.

- Para usar esta aplicação ou desenvolver com ela, você pode obter sua própria chave de API gratuita registrando-se no site da [OpenWeatherMap](https://openweathermap.org/api).
- Após obter sua chave, você pode substituir a chave existente no arquivo TypeScript (`script.ts` ou similar) pela sua própria.

---

## Estrutura do Projeto

- `index.html`: Define a estrutura da página web, incluindo o formulário de pesquisa e a área onde as informações do clima serão exibidas.
- `style.css` (assumido): Contém as regras de CSS para estilizar a aplicação, controlando o layout, cores e tipografia.
- `script.ts`: O arquivo TypeScript onde toda a lógica de frontend está escrita. Ele lida com a interação do usuário, a chamada à API e a atualização da interface.
- `script.js` (assumido): Este é o arquivo JavaScript compilado a partir do `script.ts`. É o arquivo que o navegador realmente executa.

---
