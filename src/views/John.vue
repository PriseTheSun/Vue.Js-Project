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
          <!-- <b-nav-item @click="$router.push('john')">John</b-nav-item> -->

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

    <div>
      <b-img
        src="https://i.imgur.com/4Bg53Be.png"
        fluid
        alt="Responsive image"
        class="mt-5 rounded image"
      >
      </b-img>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h2 class="mt-3">Um gênio do século XX</h2>
            <hr class="barHome" />
            <p align="start">
              John Towner Williams (Long Island, 8 de fevereiro de 1932) é um
              compositor e maestro americano premiado várias vezes por suas
              trilhas sonoras. Amigo de Steven Spielberg, assina quase todas as
              trilhas de seus filmes, tais como os temas inesquecíveis de Jaws,
              E.T. the Extra-Terrestrial, Jurassic Park e Schindler's List.
              Também é parceiro do cineasta George Lucas, sendo o autor das
              famosas trilhas das bem sucedidas séries cinematográficas Star
              Wars e Indiana Jones. Outras trilhas famosas de autoria de
              Williams são a dos três primeiros filmes da série Harry Potter e a
              trilha do primeiro filme do Superman estrelado por Christopher
              Reeve. Com a trilha sonora de The Book Thief, John Williams
              conseguiu a incrível marca de 49 indicações ao Oscar, atualmente
              51 com o seu trabalho em Star Wars: The Last Jedi. Williams ganhou
              Oscars com Fiddler on the Roof, Jaws, Star Wars, E.T. the
              Extra-Terrestrial e Schindler's List. É considerado um dos maiores
              compositores da história do cinema, tanto pelo volume de sua obra,
              como pela sua popularidade. Com 51 indicações, John Williams é a
              segunda pessoa mais indicada ao Oscar da história, perdendo para
              Walt Disney. Seu trabalho para o cinema é marcado por um estilo
              grandioso, facilmente reconhecido pelo público, em sua carreira
              soma cerca de 112 prêmios de 220 indicações segundo o IMDb, sendo
              o compositor de trilha sonora para filmes mais premiado da
              história. Além dos seus trabalhos em trilhas de filmes, é
              conhecido também por suas obras eruditas e concertos para fagote e
              orquestra, para violoncelo, para trompete, violino, flauta e o
              concerto para trompa.
            </p>
            
            <h2 class="mt-3">Início da vida e família</h2>
            <hr class="barHome" />
            <p align="start">
              John Williams nasceu em 8 de fevereiro de 1932, em Flushing
              (Queens), Nova York, filho de Ester e John Williams, Sr. Seu pai
              era um percussionista de jazz que tocava com a Raymond Scott
              Quintet. Em 1948, Williams se mudou para Los Angeles com sua
              família. Williams ingressou na North Hollywood High School e se
              graduou em 1950. Mais tarde, frequentou a Universidade da
              Califórnia em Los Angeles (UCLA), e estudou com o compositor
              italiano Mario Castelnuovo-Tedesco. Em 1952, Williams foi
              convocado para a Força Aérea dos Estados Unidos, onde dirigiu e
              fez arranjos musicais para o Air Force Band, como parte de suas
              atribuições. Após seu serviço na Força Aérea, que terminou em
              1955, Williams se mudou para New York e entrou para a Juilliard
              School, onde estudou piano com Rosina Lhévinne. Durante este
              tempo, Williams trabalhou como pianista de jazz em muitos clubes
              de Nova York e, eventualmente, estúdios, principalmente para o
              compositor Henry Mancini. Seus músicos companheiros foram Rolly
              Bundock no baixo, Jack Sperling na bateria e Bob Bain na guitarra,
              sendo destaque na série de televisão Sr. Lucky. Williams era
              conhecido como "Little Johnny Love". Williams, durante o início
              dos anos 1960, atuou como arranjador e maestro de uma popular
              série de álbuns de música com o cantor Frankie Laine. Williams foi
              casado com a atriz Barbara Ruick de 1956 até sua morte em 3 de
              março de 1974. J. Williams teve três filhos: Jennifer (nascido em
              1956), Mark Towner Williams (nascido em 1958) e Joseph (nascido em
              1960); o filho mais novo de Williams é um dos principais cantores
              da banda "Toto". John Williams se casou com sua segunda esposa,
              Samantha Winslow, em 21 de julho de 1980. John Williams é um
              membro honorário da Kappa Kappa Psi, a fraternidade nacional para
              os membros da banda da faculdade.
            </p>

             <h2 class="mt-3">Carreira</h2>
            <hr class="barHome" />
            <p align="start">
              John Williams começou sua carreira como orquestrador de grande compositores, como Alfred Newman. Seu primeiro grande filme foi Daddy-O. Ganhou notoriedade em Hollywood por sua versatilidade em composições de jazz. Williams recebeu sua primeira indicação para um Oscar por sua trilha sonora para o Valley of the Dolls (1967). A partir daí, quase todos os anos seguintes renderam uma indicação ao mestre. Sua primeira vitória foi com Fiddler on the Roof (1971). Em 1974, Williams foi abordado pelo diretor Steven Spielberg para compor a música para sua estreia na direção, The Sugarland Express. O jovem diretor ficou impressionado com o escore de Williams para o filme The Reivers (1969), e Spielberg estava convicto de que Williams poderia compor o som musical que desejava para qualquer um dos seus filmes. Eles uniram-se novamente um ano mais tarde para o segundo filme de Spielberg, Jaws. Amplamente considerado um filme de suspense clássico, as duas notas sinistras tornaram-se sinônimo de tubarões e perigo que se aproxima. A pontuação para John Williams rendeu seu segundo Oscar, seu primeiro de uma composição original. Star Wars, E.T. the Extra-Terrestrial, e Schindler's List, foram outros filmes que renderam um Oscar das 50 indicações para Williams. Muitas de suas trilhas são considerados clássicos, como o tema principal de Star Wars que é a música não popular mais executada da história. Aos 85 anos, Williams tem filmes para compôr a trilha sonora até 2020.
            </p>
            <h3 class="mt-3">Composições em cinema</h3>
            <hr class="barHome" />
            <ul align="start">
              <li>2020 – Indiana Jones 5</li>
              <li>2019 – Star Wars: Episode IX - The Rise of Skywalker</li>
              <li>2018 - Solo: A Star Wars Story (main theme)</li>
              <li>2017 – The Post</li>
              <li>2017 – Star Wars: Episode VIII: The Last Jedi</li>
              <li>2016 – The BFG</li>
              <li>2015 – Star Wars: Episode VII: The Force Awakens</li>
              <li>2015 – Demolition</li>
              <li>2014 – Road to Paloma</li>
              <li>2014 – Paranormal Activity: The Marked Ones</li>
              <li>2013 – The Book Thief</li>
              <li>2012 – Lincoln</li>
              <li>2011 – The Adventures of Tintin: The Secret of the Unicorn</li>
              <li>2011 – War Horse</li>
              <li>2008 – Indiana Jones and the Kingdom of the Crystal Skull</li>
              <li>2005 – Munich</li>
              <li>2005 – Memoirs of a Geisha</li>
              <li>2005 – War of the Worlds</li>
              <li>2005 – Star Wars: Episode III - Revenge of the Sith</li>
              <li>2004 – The Terminal</li>
              <li>2004 – Harry Potter and the Prisoner of Azkaban</li>
              <li>2002 – Catch Me If You Can</li>
              <li>2002 – Harry Potter and the Chamber of Secrets</li>
              <li>2002 – Minority Report</li>
              <li>2002 – Star Wars: Episode II - Attack of the Clones</li>
              <li>2001 – Harry Potter and the Philosopher's Stone</li>
              <li>2001 – Artificial Intelligence: AI</li>
              <li>2000 – The Patriot</li>
              <li>1999 – Angela's Ashes</li>
              <li>1999 – Star Wars: Episode I - The Phantom Menace</li>
              <li>1998 – Stepmom</li>
              <li>1998 – Saving Private Ryan</li>
              <li>1997 – Amistad</li>
              <li>1997 – Seven Years in Tibet</li>
              <li>1997 – The Lost World: Jurassic Park</li>
              <li>1997 – Rosewood</li>
              <li>1996 – Sleepers</li>
              <li>1995 – Nixon</li>
              <li>1995 – Sabrina</li>
              <li>1994 – Stargate</li>
              <li>1993 – Schindler's List</li>
              <li>1993 – Jurassic Park</li>
              <li>1992 – Home Alone 2: Lost in New York</li>
              <li>1992 – Far and Away</li>
              <li>1991 – JFK</li>
              <li>1991 – Hook</li>
              <li>1990 – Home Alone</li>
              <li>1990 – Presumed Innocent</li>
              <li>1990 – Stanley & Iris</li>
              <li>1989 – Always</li>
              <li>1989 – Born on the Fourth of July</li>
              <li>1989 – Indiana Jones and the Last Crusade</li>
              <li>1988 – The Accidental Tourist</li>
              <li>1987 – Superman IV: The Quest for Peace (Dois temas)</li>
              <li>1987 – Empire of the Sun</li>
              <li>1987 – The Witches of Eastwick</li>
              <li>1986 – SpaceCamp</li>
              <li>1984 – The River</li>
              <li>1984 – Indiana Jones and the Temple of Doom</li>
              <li>1983 – Star Wars: Return of the Jedi</li>
              <li>1982 – Monsenhor</li>
              <li>1982 – E.T. the Extra-Terrestrial</li>
              <li>1982 – Yes, Giorgio</li>
              <li>1981 – Heartbeeps</li>
              <li>1981 – Raiders of the Lost Ark</li>
              <li>1980 – Star Wars: The Empire Strikes Back</li>
              <li>1979 – 1941</li>
              <li>1979 – Dracula</li>
              <li>1978 – Superman: O Filme</li>
              <li>1978 – Jaws 2</li>
              <li>1978 – The Fury</li>
              <li>1977 – Close Encounters of the Third Kind</li>
              <li>1977 – Star Wars</li>
              <li>1977 – Black Sunday</li>
              <li>1976 – Midway</li>
              <li>1976 – The Missouri Breaks</li>
              <li>1976 – Family Plot</li>
              <li>1975 – The Eiger Sanction</li>
              <li>1975 – Jaws</li>
              <li>1974 – The Towering Inferno</li>
              <li>1974 – Earthquake</li>
              <li>1974 – The Sugarland Express</li>
              <li>1974 – Conrack</li>
              <li>1973 – Cinderella Liberty</li>
              <li>1973 – The Long Goodbye</li>
              <li>1973 – The Paper Chase</li>
              <li>1973 – The Man Who Loved Cat Dancing</li>
              <li>1973 – Tom Sawyer</li>
              <li>1973 – Images</li>
              <li>1972 – Pete 'n' Tillie</li>
              <li>1972 – The Poseidon Adventure</li>
              <li>1972 – The Cowboys</li>
              <li>1971 – Fiddler on the Roof</li>
              <li>1971 – Story of a Woman</li>
              <li>1969 – The Reivers</li>
              <li>1969 – Goodbye, Mr. Chips (Trilha Sonora adaptada)</li>
              <li>1969 – Daddy's Gone A-Hunting</li>
              <li>1967 – Valley of the Dolls (Trilha Sonora adaptada)</li>
              <li>1967 – Fitzwilly</li>
              <li>1967 – A Guide for the Married Man</li>
              <li>1966 – The Plainsman</li>
              <li>1966 – Penelope</li>
              <li>1966 – Not With My Wife, You Don't!</li>
              <li>1966 – How to Steal a Million</li>
              <li>1966 – The Rare Breed</li>
              <li>1966 – The Time Tunnel</li>
              <li>1965 – The Katherine Reed Story</li>
              <li>1965 – Lost in Space</li>
              <li>1965 – John Goldfarb, Please Come Home!</li>
              <li>1965 – None But the Brave</li>
              <li>1964 – The Killers</li>
              <li>1963 – Gidget Goes to Rome</li>
              <li>1963 – Diamond Head</li>
              <li>1962 – Bachelor Flat</li>
              <li>1962 – Stark Fear</li>
              <li>1961 – The Secret Ways</li>
              <li>1960 – Because They're Young</li>
              <li>1960 – I Passed for White</li>
              <li>1959 – Daddy-O</li>
            </ul>
           
            
            </b-col>
          
        </b-row>
      </b-container>
    </div>
    <footer id="foot">
    <b-row class="text-center" >
    <b-col>@2022 todos os direitos | Com muito esforço &#128074; desenvolvido por: Erik Araujo</b-col>
  </b-row>  
  </footer>
  </div>
</template>

<script>
export default {
  name: "John",
  components: {},
};
</script>


<style>
</style>