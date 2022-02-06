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
            <b-nav-item href="#">Download do Projeto</b-nav-item>
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
</template>

<script>

export default {
  name: 'Produtos',
  components: {}
}
</script>
