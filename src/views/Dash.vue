<template>
  <div>
    <div>
      <!--HEADER INICIO-->
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
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Pesquisar"
                v-model="textSearch"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Ir</b-button
              >
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
    </div>
    <!--HEADER FIM-->

    <!--CHART.JS INICIO-->
    <div>
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
        title="John Williams Greatest Hits 1969–1999 "
        type="axis-mixed"
        :height="300"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.data"
      >
      </vue-frappe>
    </div>
    <!--CHART.JS FIM-->

    <!--CHART.JS 01 INICIO-->
     <vue-frappe
            id="test"
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
            :dataSets="this.dataChar1">
        </vue-frappe>
    <!--CHART.JS 01 FIM-->
    

     
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
      dataChar1: [{
                    name: "Primeira Quinzenda", 
                    chartType: 'bar',
                    values: [2, 37, 15, 15, 5, 22, 29, 4, 13, 27, 20, 8],
                },
                {
                    name: "Segunda Quinzena", 
                    chartType: 'bar',
                    values: [21, 12, 49, 75, 82, 22, 9, 10, 13, 7, 18, 18],
                },
                {
                    name: "Pico de Vendas", 
                    chartType: 'line',
                    values: [21, 37, 49, 75, 82, 22, 29, 10, 13, 27, 20, 18],
                }]
      
    };
  },
};


</script>

<style>
#john {
  margin-top: 100px;
}
</style>