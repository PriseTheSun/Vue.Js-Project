<template>
  <div>
    <div>
      <!--HEADER INICIO-->
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#" id="logo"
          >VinilPay<img @click="$router.push('home')" src="@/assets/background-logo.png" alt="" id="image" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item @click="$router.push('home')">Home</b-nav-item>
            <b-nav-item @click="$router.push('produtos')">Produtos</b-nav-item>
            <b-nav-item @click="$router.push('dash')">Dash</b-nav-item>
           <b-nav-item href="https://github.com/PriseTheSun/Vue.Js-Project.git" Download>
            Download do Projeto
            </b-nav-item> 
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            
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
    <!--HEADER FIM-->

    <!--CHART.JS INICIO-->
    <div class="chartConfig">
      <span id="dashTitle">Relação de Vendas - John Williams </span>
      <vue-frappe
        id="john"
        :labels="[
          'Jan ',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ]"
        title="Greatest Hits 1969–1999 - John Williams  "
        type="axis-mixed"
        :height="300"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.data"
      >
      </vue-frappe>
    </div>
    <!--CHART.JS FIM-->

    <!--CHART.JS 01 INICIO-->

    <div class="chartConfig">
      <span id="dashTitle">Relação de Vendas - Travis Scott</span>
      <vue-frappe
        id="travis"
        :labels="[
          'Jan ',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ]"
        title="Astroworld - Travis Scott - 2021"
        type="axis-mixed"
        :height="300"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.dataChar1"
      >
      </vue-frappe>
    </div>
    <!--CHART.JS 01 FIM-->
    
    <!--CHART.JS 02 INICIO-->
    <div  class="chartConfig">
      <span id="dashTitle">Relação de Vendas - Adele</span>
      <vue-frappe
        id="Adele"
         :labels="[
          'Jan ',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ]"
        title="Easy on me - Adele - 2021"
        type="axis-mixed"
        :height="300"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.dataChart2"
      >
      </vue-frappe>
    </div>
    <!--CHART.JS 02 FIM-->


    <!--FOOTER INICIO-->
    <footer id="foot">
    <b-row class="text-center" >
    <b-col>@2022 todos os direitos | Com muito esforço &#128074; desenvolvido por: Erik Araujo</b-col>
  </b-row>  
  </footer>
  <!--FOOTER FIM-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Primeira Quinzenda",
          chartType: "bar",
          values: [15, 17, 30, 55, 18, 52, 32, 4, 15, 18, 12, 4],
        },
        {
          name: "Segunda Quinzena",
          chartType: "bar",
          values: [10, 40, 12, 35, 8, 22, 17, 10, 13, 5, 18, 21],
        },
        {
          name: "Pico de Vendas",
          chartType: "line",
          values: [15, 40, 30, 55, 18, 52, 32, 10, 15, 18, 18, 21],
        },
      ],
      dataChar1: [
        {
          name: "Primeira Quinzenda",
          chartType: "bar",
          values: [2, 37, 15, 15, 35, 72, 29, 4, 13, 27, 20, 8],
        },
        {
          name: "Segunda Quinzena",
          chartType: "bar",
          values: [21, 12, 49, 55, 82, 22, 9, 10, 13, 7, 18, 18],
        },
        {
          name: "Pico de Vendas",
          chartType: "line",
          values: [21, 37, 49, 55, 82, 72, 29, 10, 13, 27, 20, 18],
        },
      ],
      dataChart2: [
        {
          name: "Primeira Quinzena",
          chartType: "bar",
          values: [21, 32, 27, 38, 40, 22, 18, 10, 42, 5, 19, 13],
        },
        {
          name: "Segunda Quinzena",
          chartType: "bar",
          values: [50, 18, 12, 27, 57, 18, 16, 33, 17, 25, 12, 17],
        },
        {
          name: "Pico de Vendas",
          chartType: "line",
          values: [50, 32, 27, 38, 57, 22, 18, 33, 42, 25, 19, 17],
        },
      ],
    };
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

.chartConfig{
      margin-top: 50px;
}

</style>