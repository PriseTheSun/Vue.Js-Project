<template>
  <div>
    <!--HEADER-->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" id="logo"
          >VinilPay<img src="@/assets/background-logo.png" alt="" id="image" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="$router.push('home')">Home</b-nav-item>
            <b-nav-item @click="$router.push('produtos')">Produtos</b-nav-item>
            <b-nav-item @click="$router.push('dash')">Dash</b-nav-item>
            <b-nav-item
              href="https://github.com/PriseTheSun/Vue.Js-Project.git"
              Download
            >
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
              <b-icon
                icon="search"
                animation="fade"
                variant="light"
                scale="1.5"
              ></b-icon>
              
            </b-nav-form>
            <div>
              <b-avatar rounded class="user-avatar">
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
    </div>
    <!--FIM HEADER-->

    <!--INICIO CARROCEL-->
    <h2 id="title1">Albuns Mais Vendidos</h2>
    <hr class="barHome" />
    <!--GRID-->
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <div>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 3px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                caption="John Willians - Premiado na Categoria: Musica Clasica."
                img-src="https://i.imgur.com/cVqXgxe.png"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Travis Scott - Premiado na Categoria: Hip-hop/Rap."
                img-src="https://i.imgur.com/dHrMSkF.png"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Adele - Premiada na Categoria: Pop/Romantic."
                img-src="https://i.imgur.com/zYBncLr.png"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    <!--FIM CARROCEL-->

    <h2 id="title2">Nossos Albuns</h2>
    <hr class="barHome" />
    <!-- INICIO MOCK API-->
    <div class="main">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-3 col-md-4 col-sm-6 col-12"
            v-for="produto in onSearch(textSearch)"
            :key="produto.id"
          >
            <b-card
              :img-src="produto.image + `?r=${Math.random()}`"
              class="my-image"
              :title="produto.name"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text id="card">
                <span>R$: {{ produto.price }}</span>
                <span class="float-right"
                  >Em Estoque : {{ produto.quantity }}</span
                >
                <div id="button" class="text-center mt-3">
                  <button class="btn btn-primary">Conferir</button>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <!--FIM MOCK API-->
    <!--FOOTER INICIO-->
    <footer id="foot">
      <b-row class="text-center">
        <b-col
          >@2022 todos os direitos | Com muito esforço &#128074; desenvolvido
          por: Erik Araujo</b-col
        >
      </b-row>
    </footer>
    <!--FOOTER FIM-->
  </div>

</template>



<script>
import Vue from "vue";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
      produtos: [],
      textSearch: "",
    };
  },
  //IMPORT AXIOS//
  async mounted() {
    try {
      const { data } = await Vue.axios.get(
        "https://61fb022087801d0017a2c3c2.mockapi.io/api/v1/produtos"
      );

      this.produtos = [...data];
      console.log(this.produtos);
      // eslint-disable-next-line no-empty
    } catch (error) {}
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    onSearch(search = "") {
      return this.produtos.filter((it) => {
        return (
          it.name.trim().toLowerCase().indexOf(search.trim().toLowerCase()) > -1
        );
      });
    },
  },
};
</script>




<style>
/*INICIO ESTILO HEADER*/
#logo {
  font-size: 2.5rem;
}

#image {
  width: 70px;
}

.form-inline {
  margin-right: 10px;
}
.user-avatar {
  margin-right: 7px;
}
.user-avatar:hover {
  border: solid #0ad46f 2px;
}

#user-name {
  margin-right: 10px;
  color: #f6f6f6;
  font-weight: 500;
}
/*FIM ESTILO HEADER*/

/*ESTILIZAÇÃO GERAL*/
#app {
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*FIM ESTILIZAÇÃO GERAL*/

/*PRIMEIRO TITULO + ANIMAÇÃO*/
#title1 {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 10px;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 3s;
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
/*FIM PRIMEIRO TITULO + ANIMAÇÃO*/

/*SEGUNDO TITULO + ANIMAÇÃO*/
#title2 {
  text-align: center;
  margin-top: 80px;
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
/*FIM SEGUNDO TITULO + ANIMAÇÃO*/

/*BARRA + ANIMAÇÃO*/
.barHome {
  border: 1px solid #34343434;
  color: #343434;
  width: 100px;
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
/*FIM BARRA + ANIMAÇÃO*/

.card {
  margin-bottom: 20px;
}
#foot {
  color: #f6f6f6;
  background-color: #343434;
  padding: 2.5rem;
}
</style>