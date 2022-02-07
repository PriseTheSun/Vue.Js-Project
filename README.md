# VinilPay Music [https://desafioeasyjur.netlify.app/] Projeto Publicado

 ## Referências
 Referências que utilizei para chegar a conclusão do projeto:
 - Referências durante o projeto [https://www.youtube.com/watch?v=cSa-SMVMGsE] Programador a Bordo.
 - Referências durante o projeto [https://www.youtube.com/watch?v=Uo7iciQYYTo] Terminal Root.
 - Referências durante o projeto [https://www.youtube.com/watch?v=wsAQQioPIJs&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL&index=1] Hora de Codar.

## Tecnologias 
Ferramentas que utilizei para chegar a conclusão do projeto:
 - Entendendo os conceitos do Vue.Js [https://vuejs.org/] Documentação Oficial.
 - Bootstrap for Vue.js [https://bootstrap-vue.org/]
 - Node Modules - NPM [https://nodejs.org/en/]
 - Mock API [https://mockapi.io/projects] Criar a Api.
 - Axios [https://www.npmjs.com/package/vue-axios] Para consumir os dados da API.
 - Vue Frappe [https://github.com/JustSteveKing/vue2-frappe] Para a criaçãos dos graficos.
 
## Instalação

Feita a instação do node modules utilizando: 
- npm install [https://docs.npmjs.com/] Referência.

Em seguida instalamos o Vue,js pelo CLI versão global (Atenção neste projeto foi utilizado a versão2 do vue.js):
- npm install -g @vue/cli [https://v3.vuejs.org/guide/installation.html#npm] Referência.

Com o ambiente preparado começamos as instalações e  importações:
Primeiro utilizei o Bootstrapp to Vue,js [https://v3.vuejs.org/guide/installation.html#npm]
- npm install vue bootstrap bootstrap-vue

Importação
Na pasta "views" arquivo main.js realizamos as importações:
- import Vue from 'vue'
- import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
- import 'bootstrap/dist/css/bootstrap.css'
- import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
- Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
- Vue.use(IconsPlugin)

Em seguida tambem impotamos o axios [https://www.npmjs.com/package/axios] Referência.
- npm install axios

com o axios devidamente importado e instanciado seguimos para a criação da API utilizei o site [https://mockapi.io/projects] Referência.

Para obter os resultados mais proximos do enunciado ao gerar a API solicitei os seguintes dados:
- name;
- price;
- image;
- quantity;

## Leia que lá vem história

Anteriormente. Desenvolvida a Navbar + foto de usuario logado acompanhado de seu username ao lado direito com efeito em hover no css para ficar mais amigavel, junto a um carrrossel feito com a ajuda do bootstrap, pois meu foco era nas tecnologias desconhecidas por este motivo poupei o uso de massa cefálica ao que desconhecia.

Seguindo, com o JSON criado importei ao script da home com auxílio do AXIOS, &#128161; no caso foi necessário criar uma requisição assincrona(async, await) para ler e interpretar os dados da MockAPI(APÓS MUITA TENTATIVA E ERRO MUITA MESMO! &#128532;). Em seguida utilizei o formato de Card do Bootstrap para que o front aparenta-se um produto virtual. Posteriormente o bom HTML & CSS vingou onde descrevi e Posicionei as informações de estoque e valor dos produtos, feito um footer e pronto Homepage concluída.

Avançando no projeto (Quarto dia de sete consedidos pelo CTO da empresa qual estou tentando a sorte) Acompanhando o enunciado e pensando se conseguiria realizar algo proxímo do que foi solicitado. Tomando um café a história foge do padrão. Pois não tinha ideia de como proceder. Ao sentar novamente na frente do computador. Parti para a tela de produtos e como a ideia principal foi uma loja virtual de albuns musicais achei viável categorisar os produtos por seus estilos musicais, então numa visão macro pensei de norte ao sul (Da musica classica ao rap e de quebra um pop-romantico) e treinando as rotas do vue.js pois nada sabia (e ainda pouco sei de Vue.js &#128548;)resonvi deixar o ambiente preparado para mais três homepages para os curiosos que quiserem saber mais sobre os produtos mais vendidos. Ainda no quarto dia parei de mexer no codigo e fui atrás de maneiras eficiêntes de representar graficos na tela usando só código (Seria tão lindo se no enunciato tivesse EXCELL &#128517;) nada entrava na cabeça, decidi deixar o códico de lado e ir jogar um papo fora com minha avó e cumprir alguns deveres do dia dia. 

No Quinto dia bem cedinho estava determinado a fazer pelo menos um gráfico &#128583; então conheci a biblioteca CHART.JS  [https://www.chartjs.org/docs/latest/charts/bar.html] com gráficos
maravilhos que me levariam ao sucesso. Com muita dificuldade segui a risca os rquisitos de importação descritos na documentação, e nada funcionada, nada aparecia na tela, para meu desespero. Perguntei em forums sempre com o print dos erros. Até que 6h após muito erro. Percebi que estava utilizando o Vue2 e a biblioteca não era compatível com a versão que eu ja estava codando a seis dias. &#128052; por sorte a propria biblioteca inficava o frapp[https://github.com/JustSteveKing/vue2-frappe/tree/master/examples] para o vue2 onde novamente segui a risca os requisitos e de primeira consegui mostrar um grafico na tela. isso as&#128359;00hrs. Após conseguir exibir na tela penei bastante para moldar os dados de uma forma que pareça com o oque foi solicitado no enunciado. E assim terminou meu quinto dia  &#127774; (No Sexto). 

No sexto dia. Acordei determinado a polir os graficos deixalos legiveis. E assim o fiz confesso que foi até tranquilo essa moldagem dos dados. As comparações foram feiras com Js. Com os dados bem polidos tinha quase tudo oque precisava a partir daqui, foi só perfumaria: Efeitos em CSS usando Webkit, aprendendo a criar as rotas finalizei outras três homepages para fins de treino e adaptação com o vue mesmo, trabalhei o responsivo dento do que conheço e cá estamos. Prontos exatamente as &#128337;2:41AM Descrevendo minha experiência incrivel. 

Não foi um par de rosas, assim como tão pouco uma hydra de 7 cabeças. 


