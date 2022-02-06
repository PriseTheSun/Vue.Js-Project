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

     <vue-frappe
            id="test"
            :labels="[
                '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
                '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
            ]"
            title="My Awesome Chart"
            type="axis-mixed"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue']"
            :dataSets="this.dataChar1">
        </vue-frappe>

    

     
  </div>
  <!--CHART.JS FIM-->
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Primeira Quinzenda",
          chartType: "bar",
          values: [15, 15, 30, 35, 18, 52, 32, -4, 15, 18, 12, 4],
        },
        {
          name: "Segunda Quinzena",
          chartType: "bar",
          values: [10, 40, 12, 35, 8, 22, 17, 10, 13, -5, 18, 21],
        },
        {
          name: "Venda Anual",
          chartType: "line",
          values: [10, 15, 12, 35, 8, 22, 17, -4, 13, -5, 12, 4],
        },
      ],
      dataChar1: [{
                    name: "Some Daaaaaaaaaaaata", chartType: 'bar',
                    values: [25, 40, 30, 35, 8, 52, 17, -4]
                },
                {
                    name: "Another Set", chartType: 'bar',
                    values: [25, 50, -10, 15, 18, 32, 27, 14]
                },
                {
                    name: "Yet Another", chartType: 'line',
                    values: [15, 20, -3, -15, 58, 12, -17, 37]
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