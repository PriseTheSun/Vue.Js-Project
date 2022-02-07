<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" id="logo"
        >VinilPay<img src="@/assets/background-logo.png" alt="" id="image" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/')">Home</b-nav-item>
          <b-nav-item @click="$router.push('produtos')">Produtos</b-nav-item>
          <b-nav-item @click="$router.push('dash')">Dash</b-nav-item>
          <b-nav-item href="https://github.com/PriseTheSun/Vue.Js-Project.git" Download>
            Download do Projeto
            </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Pesquisar"
              v-model="textSearch"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Ir</b-button>
          </b-nav-form>
          <div>
            <b-avatar rounded id="user-avatar">
              <img src="@/assets/doo.jpg" alt="" /></b-avatar
            ><span id="user-name">Fabio Herrera</span>
          </div>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Minha Conta</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!--TITULO INICIO-->
    <b-container class="bv-row mt-5">
      <h2 class="bv-row mt-5" id="productTitle">Melhores Avaliados por Categoria</h2>
      <hr class="barHome mb-5"/>
      <!--TITULO FIM-->

      <!-- Inicio 1ªColuna + Card-->
      <b-row>
        <b-col>
          <div id="productCard">
            <b-card
              title="Musica Classica"
              img-src="https://cdn.falauniversidades.com.br/wp-content/uploads/2020/05/05175049/Quem-%C3%A9-John-Williams.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <strong>John Towner Williams</strong>
                <p align="start">
                  <br />Maestro e Compositor americano premiado várias vezes por
                  suas trilhas sonoras. Amigo de Steven Spielberg, assina quase
                  todas as trilhas de seus filmes, tais como os temas
                  inesquecíveis de Jaws, E.T. the Extra-Terrestrial, Jurassic
                  Park e Schindler's List.
                </p>
              </b-card-text>
              <b-button @click="$router.push('John')"  variant="outline-secondary">Saiba Mais</b-button>
              </b-card>
          </div>
        </b-col>
        <!-- Fim 1ªColuna + Card-->

        <!-- Inicio 2ªColuna + Card-->
        <b-col>
          <div  id="productCard2">
            <b-card
              title="Rapp/Hip hop"
              img-src="https://jpimg.com.br/uploads/2018/08/travis-scott.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <strong>Jacques Berman Webster II</strong>
                <p align="start">
                  <br />Jacques Berman Webster II, mais conhecido por seu nome
                  artístico Travis Scott, é um rapper, cantor, compositor e
                  produtor musical norte-americano. Em 2012, Scott assinou seu
                  primeiro grande contrato com a gravadora Epic Records.
                </p>
              </b-card-text>
               <b-button @click="$router.push('travis')"  variant="outline-secondary mt-4">Saiba Mais</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <!-- Fim 2ªColuna + Card-->

          <!-- Inicio 3ªColuna + Card-->
          <div id="productCard3">
            <b-card
              title="Romantic/Pop"
              img-src="https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/10/adele.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <strong>Adele Laurie Blue Adkins MBE</strong>
                <p align="start">
                  <br />
                  É uma cantora, compositora e multi-instrumentista britânica.
                  Ela é um dos artistas recordistas de vendas no mundo, com mais
                  de 120 milhões de discos vendidos.
                </p>
              </b-card-text>
              <b-button @click="$router.push('Adele')"  variant="outline-secondary mt-5">Saiba Mais</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <footer id="foot">
    <b-row class="text-center" >
    <b-col>@2022 todos os direitos | Com muito esforço &#128074; desenvolvido por: Erik Araujo</b-col>
  </b-row>  
  </footer>
  </div>
  <!-- Fim 3ªColuna + Card-->
  
</template>

<script>
export default {
  name: "Produtos",
  components: {},
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style>

#productTitle{
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 7s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInDown {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
}


#productCard{
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInLeft {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInLeft {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 


#productCard2{
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInUp {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInUp {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
}



#productCard3{
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeInRight {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  }
  @keyframes fadeInRight {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 

</style>