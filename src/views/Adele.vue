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
          <b-nav-item
            href="https://github.com/PriseTheSun/Vue.Js-Project.git"
            Download
          >
            Download do Projeto
          </b-nav-item>
          <!-- <b-nav-item @click="$router.push('adele')">John</b-nav-item> -->
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
        src="https://i.imgur.com/h4DZRIz.png"
        fluid
        alt="Responsive image"
        class="mt-5 rounded image"
      >
      </b-img>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h2 class="mt-3" id="productTitle">Uma nova diva</h2>
            <hr class="barHome" />
            <p align="start">
              Adele Laurie Blue Adkins MBE (Londres, 5 de maio de 1988) é uma
              cantora, compositora e multi-instrumentista britânica. Ela é um
              dos artistas recordistas de vendas no mundo, com mais de 120
              milhões de discos vendidos.Nascida e criada no distrito de
              Tottenham, em Londres, começou a cantar aos quatro anos de idade e
              iniciou sua carreira artística em 2006, após se graduar em música
              na BRIT School e assinar um contrato com a XL Recordings. Adele
              foi descoberta pela gravadora através de demos musicais postadas
              em seu perfil na rede social MySpace.Em 2007, ela recebeu o prêmio
              Critics' Choice do Brit Awards e alcançou o topo do BBC Sound of
              2008. Seu álbum de estreia, 19, foi lançado em janeiro de 2008
              sendo bem recebido comercialmente e pela crítica. Foi certificado
              como Disco de Platina 8 vezes no Reino Unido e três vezes nos
              Estados Unidos. O álbum rendeu quatro singles, incluindo "Hometown
              Glory", a primeira música escrita por Adele, aos 16 anos, baseada
              em sua vida no subúrbio onde morou, West Norwood, em Londres. Uma
              aparição que ela fez no Saturday Night Live no final de 2008
              impulsionou sua carreira nos EUA. No Grammy Awards de 2009, Adele
              recebeu os prêmios de Artista Revelação e Melhor Performance Vocal
              Pop Feminina. Adele alcançou o auge da carreira ao lançar seu
              segundo álbum, 21, com o qual superou diversos recordes e dominou
              as paradas de sucesso dos Estados Unidos e Reino Unido, com o
              single "Rolling in the Deep". 21 vendeu mais de 30 milhões de
              cópias no mundo. O sucesso fez Adele receber menções no Guinness
              Book mais de dez vezes. Por ser a primeira mulher a ter ao mesmo
              tempo, dois singles e dois álbuns simultaneamente no top 5 das
              paradas britânicas, fato esse, que só a banda The Beatles tinha
              alcançado em 1964, por ser a primeira artista a vender mais de 3
              milhões de cópias de um álbum em um ano no Reino Unido e com o
              terceiro single do álbum, "Set Fire to the Rain", ao se tornar a
              primeira artista da história a liderar a Billboard 200
              consecutivamente três vezes no primeiro lugar. Por quebrar o
              recorde do vídeo a atingir um bilhão de visualizações em menor
              período no YouTube, 88 dias. Ela também superou recordes de
              artistas como Michael Jackson, Oasis, 'N Sync, Whitney Houston,
              Madonna e Beyoncé. A cantora foi citada na quinta posição da lista
              das "100 Maiores Mulheres na Música" pelo VH1. Já pela revista
              americana Time, foi eleita uma das pessoas mais influentes do
              mundo. Ela também foi listada na sexta posição da lista das
              celebridades com menos de trinta anos mais bem pagas e bem
              sucedidas de 2011, pela Forbes. Em 2013, Adele foi listada como a
              décima quinta artista mais sexy da VH1. Adele é membro da
              Excelentíssima Ordem do Império Britânico desde 2013, ao ser
              condecorada pelo príncipe Charles por suas contribuições para a
              indústria fonográfica britânica. Em 2012, lançou "Skyfall", que
              co-escreveu e gravou para o filme homônimo de James Bond. A música
              ganhou o Oscar e o Globo de Ouro de "Melhor Canção Original", bem
              como um Grammy e um Brit Award de Single Britânico do Ano. Depois
              de uma pausa de três anos, Adele lançou seu terceiro álbum de
              estúdio, 25, em 2015. Tornou-se o álbum mais vendido do ano e
              quebrou recordes de vendas na primeira semana no Reino Unido e nos
              Estados Unidos. 25 foi seu segundo álbum a receber o certificado
              de diamante nos EUA e ganhou cinco prêmios Grammy, incluindo o
              segundo de Álbum do Ano vencido pela cantora e quatro Brit Awards.
              Entre os principais prêmios vencidos durante sua carreira estão
              quinze Grammy Awards, nove Brit Awards, dezoito Billboard Music
              Awards, um Globo de Ouro e um Oscar. Nos anos de 2011, 2012 e
              2016, Adele foi nomeada Artista do Ano pela Billboard.
            </p>
            <h2 class="mt-3">Biografia</h2>
            <hr class="barHome" />
            <p align="start">
              Adele nasceu no dia 5 de maio de 1988 em Tottenham, Londres, filha
              de uma mãe inglesa, Penny Susan Adkins e de um pai galês, Mark
              Evans. É a primeira e única filha de Penny, que adolescente na
              época, foi abandonada pelo então namorado, Mark, quando Adele
              tinha 2 anos. O casal havia encontrado dificuldades no
              relacionamento por conta do vício alcoólico de Mark após a morte
              de seu pai por câncer. Devido a isso, ela foi criada apenas pela
              mãe e não manteve nenhum relacionamento afetivo com seu pai. Ela
              tem um meio-irmão chamado Cameron O'Sullivan, por parte do pai,
              nascido entre 1994 e 1995, com quem, semelhantemente, Adele não
              tem um relacionamento intimo. Ela começou a cantar aos quatro anos
              de idade e afirma ter se tornado obcecada por vozes. Ao crescer,
              Adele passou a maior parte do tempo cantando em vez de ler; em
              2009 a cantora relatou que o último livro que leu com assiduidade
              foi Matilda de Roald Dahl quando ela tinha seis anos de idade. Em
              1997, aos nove anos, ela e sua mãe, que até então havia encontrado
              trabalho como fabricante de móveis e organizadora de atividades de
              aprendizagem de adultos, se mudaram para Brighton, na costa sul da
              Inglaterra.Em 1999, elas voltaram para Londres, primeiro para
              Brixton e depois para o distrito vizinho West Norwood, ao sul, o
              que inspirou Adele a compor seu primeiro single, intitulado
              "Hometown Glory", do álbum 19, escrito por ela aos dezesseis anos.
              Depois de se mudar, Adele começou a se interessar por artistas de
              R&B, como Destiny's Child, Lauryn Hill e Mary J. Blige.Em maio de
              2006, formou-se na BRIT School, mesmo colégio onde estudaram Kate
              Nash, Amy Winehouse e Jessie J. Entre os dezesseis e dezoito anos,
              Adele trabalhou como atendente no café de sua tia, em Londres,
              onde dividia os estudos com o trabalho. Desde a infância ela
              gostou da música e tinha o apoio familiar. A BRIT School a fez
              tomar um desejo maior em ingressar na carreira artística, onde,
              logo após formar-se e postar demos musicais no My Space, assinou
              um contrato de gravação com a XL Recordings, tornando-se uma das
              artistas mais bem sucedidas dos últimos tempos. Em 2006, Adele
              gravou três demos de música para um projeto de classe e as enviou
              a um amigo que postou no MySpace, onde tornou-se um grande sucesso
              e chamou a atenção da XL Recordings.[Após trocar alguns e-mails e
              telefonemas, ela assinou um contrato com a gravadora e gravou seu
              primeiro álbum de estúdio.
            </p>

            <h2 class="mt-3">Carreira</h2>
            <hr class="barHome" />
            <p align="start">
              2006–10: Início da carreira e 19 Ver artigo principal: 19 Adele
              cantando e tocando violão em pub de Kilburn, Londres, 2007. Quatro
              meses após a formatura, ela publicou duas músicas na quarta edição
              de artes do site PlatformsMagazine.com. Ela gravou demos de
              três músicas para um projeto de classe e as deu para um amigo. O
              amigo postou as demos no MySpace, onde tornou-se muito bem
              sucedido e levou a um telefonema de Richard Russell, chefe da XL
              Recordings. Ela duvidava que a oferta fosse real porque a única
              gravadora que conhecia era a Virgin Records e levou uma amiga para
              a reunião. Nick Huggett, da XL, recomendou Adele ao empresário
              artístico Jonathan Dickins da September Management, que em junho
              de 2006 tornou-se seu representante oficial. Huggett em
              seguida, assinou Adele para a gravadora em setembro de 2006. Adele
              forneceu vocais para Jack Peñate na música, "My Yvonne", para seu
              álbum de estreia, e foi durante esta sessão que conheceu seu
              primeiro produtor, Jim Abbiss, que iria produzir a maioria das
              faixas de seu álbum de estreia, 19, e faixas em 21.[58] No início
              de 2007 ela tocava em bares no norte de Londres para cerca de dez
              pessoas em uma silenciosa turnê. Em junho de 2007 fez sua
              primeira aparição na televisão, tocando "Daydreamer" no programa
              Later with Jools Holland, da BBC. Em 22 de outubro de 2007,
              seu single de estreia, "Hometown Glory" foi publicado. Em 2008,
              Adele faturou o seu primeiro Brit Award. O prêmio Critics' Choice
              foi inaugurado na premiação e Adele o venceu sendo selecionada
              como a escolha dos críticos antes do lançamento de seu álbum de
              estreia. Em 28 de janeiro de 2008, Adele lançou seu álbum
              de estreia, intitulado 19. Desde a sua estreia o álbum foi
              aclamado pela crítica e vendas, vendendo até hoje cerca de 10
              milhões de cópias pelo mundo. O álbum estreou em número um e
              recebeu três certificações de platina no Reino Unido e dois
              Grammys em 2009. A ascensão de Adele nos Estados Unidos
              iniciou-se após uma apresentação no programa Saturday Night Live
              em 2008. Em sua aparição, o programa obteve seu maior número de
              audiência em quatorze anos, com dezessete milhões de
              telespectadores. Adele cantou "Chasing Pavements" e "Cold
              Shoulder" no dia seguinte e 19 liderou as paradas do iTunes e
              ficou no Top 5 da Amazon.com, enquanto "Chasing Pavements" subiu
              para o Top 25. O álbum alcançou o décimo primeiro lugar na
              Billboard 200, como resultado, um salto de trinta e cinco lugares
              ao longo da semana anterior. O álbum foi certificado como ouro em
              fevereiro de 2009, pela Recording Industry Association of America.
              O nome do álbum, faz referência a idade que Adele tinha quando o
              compôs. "Hometown Glory", atingiu a décima nona posição da UK
              Singles Chart e a terceira na Bélgica. O segundo single, "Chasing
              Pavements", lançado em 11 de janeiro de 2008, alcançou a segunda
              posição da UK Singles Chart e a décima primeira da Billboard Hot
              100, tendo ainda conseguido entrar no Top 10 de outros cinco
              países. O terceiro single foi "Cold Shoulder", lançado em 28 de
              abril de 2008, chegou a décima oitava posição da UK Singles Chart
              e a terceira na Bélgica. E o quarto e último single, "Make You
              Feel My Love", lançado em 27 de outubro de 2008, cover da canção
              do cantor Bob Dylan presente no álbum Time Out of Mind, de 1997,
              chegou a quarta posição no Reino Unido e na Escócia, além de ter
              entrado no Top 5 de outros dois países. Adele gravou "Make You
              Feel My Love" por recomendação de Jonathan Dickins que amava a
              canção. Adele foi indicada para um prêmio Mercury Prize de
              2008 por 19. Ela também ganhou um Urban Music Award por
              "Melhor Artista de Jazz". Ela também recebeu uma indicação ao
              Q Awards na categoria Breakthrough Act e uma indicação ao
              Music of Black Origin na categoria de Melhor Mulher do Reino
              Unido. Em março de 2008, Adele assinou um contrato com a
              Columbia Records e XL Recordings por sua incursão nos Estados
              Unidos. Em maio de 2008, deu início à sua primeira turnê, An
              Evening with Adele, para o álbum 19 que contou com 53 shows que
              passaram pela América do Norte, Europa e Ásia e terminou em julho
              de 2009. Mais tarde, ela cancelou as datas da turnê de 2008
              nos EUA para estar com um ex-namorado. Ela disse para a revista
              Nylon em junho de 2009: "Eu estou tipo, 'não posso acreditar que
              fiz isso'. Parece tão ingrato... Eu estava bebendo muito e isso
              era a base do meu relacionamento com esse garoto. Eu não
              suportaria ficar sem ele, então pensava, 'bem, vou cancelar minhas
              coisas então'." Ela se referiu a este período como sua "crise da
              vida precoce". Ela também é conhecida por sua antipatia por voos e
              ataques de saudade quando está longe de sua terra natal,
              Londres. Em julho de 2008, Adele pagou 8.000 libras por
              uma pintura encomendada pela pintora Stella Vine, em um leilão
              beneficente em prol da Keep a Child Alive, uma instituição de
              caridade que ajuda as crianças Africanas e suas famílias que vivem
              com HIV/AIDS. Adele disse que planejava pedir a Stella para
              pintar um retrato dela e sua mãe. Em novembro de 2009, Adele
              fez uma colaboração na canção "Water and a Flame" do álbum de
              estreia Love & War do cantor Daniel Merriweather. Ela
              participou de um MTV Unplugged nos Estados Unidos no mesmo
              ano. No 51º Grammy Awards em fevereiro de 2009, Adele recebeu
              o prêmio de Melhor Artista Novo, além do prêmio de Melhor
              Performance Pop Vocal Feminina por "Chasing Pavements", que também
              foi indicado como Gravação do Ano e Canção do Ano. Em 2010,
              ela recebeu outra nomeação ao Grammy de Melhor Performance Pop
              Vocal Feminina, desta vez pelo single Hometown Glory. Durante o
              2010 CMT Special Artistas of Year, Adele realizou um dueto de
              "Need You Now", canção do grupo Lady Antebellum, ao lado de Darius
              Rucker. Mais tarde o dueto foi nomeado para um CMT Music
              Award. 2011–14: 21 e reconhecimento mundial Ver artigo
              principal: 21 Adele durante concerto da turnê Adele Live em
              Seattle, 2011. Adele lançou seu segundo álbum de estúdio 21 em 24
              de janeiro de 2011 na Inglaterra e em 22 de fevereiro nos Estados
              Unidos pelas gravadoras Columbia Records e XL Recordings. O álbum
              obteve grande sucesso comercial e com a crítica, vendendo duzentas
              e oito mil cópias na primeira semana de vendas no Reino Unido
              estreando em primeiro lugar na UK Albums Chart e também liderou as
              paradas de vendas em vários países. 21 também estreou muito bem
              nos Estados Unidos alcançando a primeira posição na Billboard 200
              vendendo trezentas e cinquenta e duas mil cópias na primeira
              semana. Assim como o álbum 19, 21 também é uma referência
              a idade que a cantora tinha quando o fez. O álbum vendeu mais de
              30 milhões de cópias mundialmente. A produção e co-composição
              do disco contou com produtores como Paul Epworth, Dan Wilson, Ryan
              Tedder, Fraser T. Smith e Francis White. "Rolling In The Deep" foi
              lançada como o primeiro single do álbum em 29 de novembro de 2010.
              A canção alcançou o número um na Bélgica, Alemanha, Itália, Países
              Baixos e Suíça, além de ficar no top dez dos maiores hits na
              Áustria, Dinamarca, Irlanda, Nova Zelândia e Noruega além de
              vencer vários prêmios. Logo após, Adele lançou "Someone Like
              You" como segundo single. A música foi inspirada no fim de um
              relacionamento. Após uma performance realizada ao vivo no BRIT
              Awards de 2011, a canção "Someone Like You" chegou ao primeiro
              lugar das paradas de sucesso no Reino Unido, enquanto o álbum
              também permaneceu como número um no país. A Official
              Charts Company anunciou que Adele é a primeira artista a alcançar,
              ainda viva, uma canção e um álbum como número um ao mesmo tempo na
              Inglaterra desde Os Beatles em 1964. É a primeira vez
              que um artista ocupa os dois primeiros lugares nos álbuns do Reino
              Unido, desde The Corrs em 1999. O álbum ficou onze semanas
              consecutivas na primeira posição, antes de ser derrubado do topo
              por Luz Wasting do Foo Fighters. Na semana seguinte porém, ela
              recuperou o primeiro lugar onde ficou por mais cinco semanas. Em
              julho de 2011, "Someone Like You" se tornou a primeira canção a
              vender mais de um milhão de cópias no Reino Unido esta década.
              Em 4 de julho de 2011, "Set Fire to the Rain" foi lançada como o
              terceiro single de 21. Em 28 de outubro, durante uma entrevista
              para a Billboard, a Columbia Records revelou que "Rumour Has It"
              seria lançada como o terceiro single do álbum, no entanto, a
              versão da canção foi desfeita e "Set Fire to the Rain" foi lançado
              como o terceiro single. A performance ao vivo da canção,
              retirada de seu álbum de vídeo, Live at the Royal Albert Hall,
              venceu o Grammy de Melhor Performance Pop Solo. Dia 5 de novembro
              de 2011, "Rumour Has It" foi declarada o quarto single do 21.
              Para promover o álbum, em março de 2011, Adele embarcou na turnê
              Adele Live, que esgotou sua participação na América do Norte.
              A turnê terminou em outubro de 2011 e alguns shows foram
              cancelados por conta de problemas em sua voz. Em outubro de 2011,
              Adele foi forçada a cancelar datas por conta de uma hemorragia nas
              cordas vocais. Em 28 de outubro de 2011, a Columbia Records
              anunciou que Adele passaria por uma cirurgia. A cantora divulgou
              um comunicado dizendo que precisava de um longo período de repouso
              para evitar danos permanentes à sua voz.Na primeira semana de
              novembro de 2011, Steven M. Zeitels, diretor do Centro de Cirurgia
              da Laringe e Reabilitação da Voz do Massachusetts General Hospital
              (MGH), em Boston, realizou uma cirurgia a laser nas cordas vocais
              de Adele para remover um pólipo benigno. Em fevereiro de 2012
              ela revelou que a cirurgia obteve êxito em entrevista ao programa
              americano 60 Minutes, voltando a apresentar-se no mesmo mês na
              cerimônia do Grammy. Adele lançou o EP iTunes
              Festival: London 2011 no dia 14 de julho de 2011. O EP foi gravado
              em 7 de julho de 2011 e foi lançado no formato de download
              digital. A cantora foi capa da edição de março de 2011 da
              revista Vogue Americana e também foi capa da mesma revista na
              edição de outubro de 2011 no Reino Unido.Em 29 de
              novembro de 2011, foi lançado Live at the Royal Albert Hall, que
              foi gravado em 22 de setembro, durante sua turnê. Em dezembro
              de 2011, 21 havia vendido mais de 3 milhões e 400 mil cópias no
              Reino Unido e se tornou o álbum mais vendido do século,
              ultrapassando Back to Black de Amy Winehouse.Logo depois, o
              jornalista e autor Chas Newkey-Burden, escreveu a biografia
              oficial de Adele que foi lançada em janeiro de 2012 pela editora
              LeYa. Adele no Golden Globe Awards de 2013 por sua indicação
              pela música tema da franquia James Bond. A série de TV Glee, já
              fez versões de "Rolling In The Deep", "Rumour Has It", "Someone
              Like You", "Turning Tables" e "Chasing Pavements". Adele
              também teve os hits "Rolling in the Deep", "Someone Like You" e
              "Set Fire to the Rain" nas trilhas sonoras das novelas da Rede
              Globo.Em outubro de 2012, "Rolling In The Deep"
              foi eleita Canção do Ano, na premiação BMI Awards, sendo executada
              mais de dois milhões de vezes nas rádios e televisão americanas, o
              equivalente a ser ouvida repetidamente por mais de doze anos.
              Em fevereiro de 2012, 21 foi declarado o sétimo disco mais vendido
              de todos os tempos no Reino Unido. Logo depois, em dezembro de
              2012, segundo a Official Charts Company, o álbum se tornou o
              quarto disco mais vendido de todos os tempos em solo britânico,
              superando vários trabalhos de grandes nomes da música como (What's
              the Story) Morning Glory? de Oasis e atrás apenas de Greatest Hits
              do Queen e Sgt. Pepper's Lonely Hearts Club Band de The
              Beatles. Nos Estados Unidos, o álbum vendeu mais de dez
              milhões de cópias e é o primeiro a vender três milhões de cópias
              digitais no país. Em outubro de 2012, Adele lançou a
              música tema do filme 007 - Operação Skyfall, filme da saga de
              James Bond. A faixa "Skyfall" foi lançada oficialmente como single
              em 5 de outubro de 2012, aniversário de 50 anos do lançamento de
              Dr. No e sendo o primeiro novo trabalho da cantora desde o
              lançamento de 21. A música foi composta por ela e seu
              colaborador Paul Epworth, que também trabalhou com a cantora no
              hit "Rolling In The Deep"."Skyfall" foi gravada no Abbey
              Road Studios, estúdio famoso por suas expressivas gravações para
              os Beatles e em seu arranjo contou com uma orquestra de 77
              músicos.Cerca de vinte e quatro horas após o lançamento da
              música na internet, ela alcançou o número um de downloads do
              iTunes em quarentena e seis países, incluindo Brasil e
              Portugal. Skyfall vendeu mais de dois milhões de cópias pelo
              mundo. Em janeiro de 2013, a música conquistou o Globo de
              Ouro de Melhor Canção Original e no mês seguinte a tornou-se
              a primeira canção-tema em 50 anos da franquia de James Bond em
              conquistar o Oscar de Melhor Canção da Academia de Artes e
              Ciências Cinematográficas de Los Angeles. "Skyfall" também
              venceu o Grammy de Melhor Canção Escrita para Mídia Visual.
              Em 3 de abril de 2012, Adele confirmou que seu terceiro álbum
              provavelmente seria de pelo menos dois anos de distância,
              afirmando: "Eu tenho que ter tempo e viver um pouco. Houve uns
              bons dois anos entre o meu primeiro e segundo álbum. Vai ser o
              mesmo desta vez". Ela afirmou que continuaria escrevendo e
              compondo seu próprio material. No Grammy Awards 2013, ela
              confirmou que estava nos estágios iniciais de seu terceiro
              álbum. Ela também afirmou que provavelmente trabalhará
              com Paul Epworth novamente. Em setembro de 2013, Wiz Khalifa
              confirmou que ele e Adele tinham colaborado em uma música para seu
              quinto álbum de estúdio, Blacc Hollywood, apesar da colaboração
              não ter feito parte da lista final de faixas. Na véspera de
              seu aniversário de 26 anos em maio de 2014, Adele postou uma
              mensagem enigmática via sua conta no Twitter, que provocou a
              discussão na mídia sobre seu próximo álbum. A mensagem "Bye bye
              25... até o final do ano" foi interpretada por alguns na mídia,
              incluindo o Daily Mail, no sentido de que seu próximo álbum seria
              intitulado 25 e lançado no final do ano.No início de
              agosto, Paul Moss sugeriu que um álbum seria lançado em 2014 ou
              2015. No entanto, nas contas de outubro de 2014 arquivadas na
              Companies House pela XL Recordings, eles descartaram um lançamento
              de 2014. 2015–17: 25 e Adele Live 2016 Ver artigo principal:
              25 Ryan Tedder, produtor que também trabalhou com Adele em 21,
              revelou em uma entrevista que em seu terceiro álbum, Adele está
              fazendo o melhor som em relação aos seus dois últimos álbuns, 19 e
              21, que ela está em seu melhor momento e continua a ser sua
              artista favorita no mundo. Em janeiro de 2014, os
              compositores Phil Collins e Diane Warren, afirmaram ter escrito
              canções com Adele para o sucessor do 21, apesar de as faixas não
              terem entrado para o álbum. Em 27 de agosto de 2015, a
              Billboard noticiou que a gravadora da XLS, a XL Recordings, tinha
              a intenção de lançar seu terceiro álbum de estúdio em novembro de
              2015. Danger Mouse contribuiu com uma música, enquanto Tobias
              Jesso Jr. escreveu uma faixa e Ryan Tedder está de volta à mixagem
              depois de produzir e co-escrever "Rumor Has It" em 21. No 72°
              Festival Internacional de Cinema de Veneza no início de setembro
              de 2015, Sia anunciou que seu novo single "Alive" foi co-escrito
              por Adele, e era originalmente destinado ao terceiro álbum de
              Adele. No dia 17 de outubro de 2015, em um comercial do
              programa X Factor UK foi divulgado um trecho de 30 segundos do
              novo single do novo álbum da cantora, intitulado "Hello". Em
              22 do mesmo mês e ano, ela confirmou através do seu site oficial
              que lançará seu novo álbum, intitulado 25, no dia 20 de novembro
              de 2015. Adele cantando em Minnesota durante sua primeira turnê
              norte-americana em cinco anos em julho de 2016. Dez milhões de
              pessoas tentaram comprar ingressos para os concertos da digressão
              norte-americana. Apenas setecentos e cinquenta mil ingressos
              estavam disponíveis. Em carta aberta, Adele explicou um pouco
              o conceito do álbum novo. Segundo ela, 21 foi sobre uma desilusão
              amorosa e 25 fala sobre conhecer a pessoa que ela se tornou sem
              nem perceber. “Fazer 25 anos foi um ponto de virada para mim, um
              tapa no meio dos 20 anos. Estar no limite entre ser uma
              adolescente em idade avançada ou uma adulta completa me fez
              decidir ser quem eu serei pelo resto da vida sem um caminhão de
              mudança lotado com minhas velharias. Eu sinto falta de tudo, do
              meu passado, o bom e o ruim, mas apenas porque não posso voltar
              atrás. Quando eu estava lá, queria sair. Tão típico”. Adele
              também acredita que 25 será seu último álbum com a idade dela como
              título, acreditando que 25 seria o fim de uma trilogia. Logo
              depois, por meio de sua conta no Instagram, a cantora
              pronunciou-se sobre o lançamento do single "Hello", que seria
              lançando no dia 23, às quatro horas da manhã, deste mesmo mês.
              Também o site Pitchfork Media informou que o lançamento ocorreria
              na sexta, dia 23 de outubro, juntamente com a estreia do clipe,
              dirigido pelo cineasta Xavier Dolan, famoso entre cinéfilos por
              filmes indie como Mommy, J'ai tué ma mère e Laurence Anyways. A
              Billboard confirmou a informação. O videoclipe oficial foi lançado
              30 minutos após o lançamento do single do novo álbum. Em
              poucas horas, o novo single alcançou o topo de mais de 100 países,
              por meio da plataforma do iTunes. O álbum 25 também não ficou para
              trás, alcançou o topo na mesma plataforma em mais de 90 países. O
              disco tem composições de Adele em parceria com nomes como Max
              Martin, Ryan Tedder, Greg Kurstin e Bruno Mars. 25 possuí 11
              faixas na versão padrão, e na versão Target acompanha mais três
              faixas bônus: "Can't Let Go", "Lay Me Down" e "Why Do You Love
              Me". O videoclipe de "Hello" bateu o recorde de clipe
              mais assistido da plataforma VEVO em vinte e quatro horas,
              totalizando vinte e três milhões de visualizações, atualizado
              depois pela própria VEVO para vinte e sete milhões e setecentas
              mil visualizações como o número real do recorde, destronando
              o antigo recorde que pertencia a "Bad Blood", da cantora americana
              Taylor Swift.O videoclipe quebrou também o recorde do vídeo
              a atingir a marca de um bilhão de visualizações em menos tempo na
              história do YouTube, em 2 meses e 28 dias. O antigo recorde era
              "Gangnam Style" do coreano Psy que levou cinco meses e oito dias
              para tal feito.Em entrevista a Rádio BBC, a cantora revelou
              porque demorou tanto tempo para lançar um álbum: "Fiz um álbum
              sobre ser mãe, e era muito chato", comentou a artista, que
              descartou todo o álbum para começar um do zero. “Foi realmente
              difícil… Ter um tempo livre… Eu meio que perdi o hábito de
              compor”, falou ao entrevistador, sobre o tempo que ela passou
              cuidando de seu filho e também sobre sua carreira dentro do
              exercício da maternidade. Enquanto isso, seu novo single
              supracitado batia outros recordes: tornou-se a canção mais
              executada no serviço de streaming Spotify em 24 horas, sendo
              tocada quase 5 milhões de vezes, 1.88 milhões apenas nos Estados
              Unidos. Desbancou assim, o single "Sorry' do cantor canadense
              Justin Bieber lançado horas antes de "Hello". Mesmo em meio a era
              dos streamings, a canção se tornou a mais bem sucedida em vendas
              da história fonográfica dos EUA, vendendo cerca de um milhão e cem
              mil e superando o record do rapper Flo-Rida que teve seu single
              "Right Round" com mais de seiscentos e trinta e seis mil cópias
              vendidas em uma semana de vendas. Com todo esse sucesso,
              "Hello" estreou direto em primeiro na tabela Hot 100, da
              Billboard. Também, com sua volta a música, seu último álbum,
              21, lançado em 2011, subiu trinta e cinco posições na parada
              Billboard 200 da mesma Billboard, ultrapassando álbuns lançados
              ano passado e até neste mesmo ano corrente de 2015, onde o mesmo
              está há mais de duzentas e quarenta e cinco semanas
              consecutivas. Espectadores chegando ao show no Wembley
              Stadium, em Londres. Noventa e oito mil pessoas estiveram
              presentes no concerto, um recorde do estádio para um evento
              musical no Reino Unido. Em sequência da divulgação de seu
              novo álbum, Adele gravou o especial de TV, ao vivo, "Adele at the
              BBC", onde cantou algumas músicas do mesmo álbum. O especial foi
              gravado no dia 2 de novembro e apresentado no dia do lançamento de
              25, sendo sua primeira apresentação televisionada desde o Oscar
              2013. Também cantou seus novos singles e fez uma aparição no
              programa norte-americano Saturday Night Live no dia 21 de
              novembro, um dia após o lançamento oficial de seu álbum. A
              cantora realizou o concerto Adele Live in New York City no Radio
              City Music Hall no dia 17 de novembro, que foi transmitido pela
              rede de televisão NBC no mês seguinte. Em março de 2016, ela
              estampou a capa da revista Vogue americana, na qual posou em um
              ensaio de fotos para Annie Leibovitz e concedeu uma entrevista
              falando sobre sua carreira, maternidade e outros. Em 27 de
              novembro, 25 estreou em primeiro lugar no UK Albums Chart e se
              tornou o álbum mais vendido na história das paradas do Reino Unido
              em sua primeira semana, com mais de 800.000 cópias
              comercializadas. O álbum estreou em número um nos Estados
              Unidos, onde vendeu um recorde de 3,38 milhões de cópias em sua
              primeira semana, a maior semana de vendas de um álbum desde que a
              Nielsen Company começou a monitorar as vendas em 1991. 25
              também quebrou primeiro registros de vendas semanais no Canadá e
              na Nova Zelândia.25 tornou-se o álbum mais vendido de
              2015 em vários países, incluindo Austrália, Reino Unido e Estados
              Unidos, passando sete semanas consecutivas em primeiro lugar em
              cada país, antes de ser substituído por David Bowie com seu álbum
              Blackstar. Foi o álbum mais vendido em todo o mundo
              no ano de 2015, com 17,4 milhões de cópias vendidas. 25 já vendeu
              mais de 20 milhões de cópias globalmente.As sete semanas de
              Adele no topo do UK Albums Chart levaram seu total a 31 semanas no
              primeiro lugar no Reino Unido, com seus três álbuns, superando o
              recorde anterior de Madonna na maioria das semanas no número um
              para um ato feminino. Segundo o Sunday Times, em 2015 pelo
              quarto ano consecutivo Adele foi apontada como a artista britânica
              com menos de 30 anos mais rica do Reino Unido. No mesmo
              ano foi estimado que, entre singles e álbuns, Adele tenha mais de
              100 milhões de discos vendidos, tornando-a uma das artistas
              musicais recordistas de vendas no mundo. Ela iniciou sua
              turnê mundial Adele Live 2016 em 29 de fevereiro, a qual é apoiada
              no álbum 25. As últimas datas foram realizadas em 2017, e seu nome
              foi alterado para Adele Live 2017. Começando na Europa, a Adele
              Live 2016 incluiu quatro datas no Manchester Arena em março de
              2016, seis datas no O2 Arena, Londres, com outras datas em
              Irlanda, Espanha, Alemanha, Itália e Holanda, entre outros.
              Sua turnê norte-americana começou no dia 5 de julho em St. Paul,
              Minnesota. A parte incluiu seis noites no Madison Square
              Garden, em Nova York, oito noites no Staples Center, em Los
              Angeles, e quatro noites no Air Canada Centre, em Toronto,
              Canadá. Adele quebrou o recorde de cinco shows de Taylor
              Swift pela maioria dos shows consecutivos esgotados no Staples
              Center.A turnê contou com 122 shows que passaram pelos
              continentes Europa, América do Norte e Oceania. Atuou em
              Lisboa em 21 e 22 de maio no Altice Arena. Adele tocou no
              Festival de Glastonbury de 2016, que realizou-se em 25 de junho na
              Inglaterra, para um público de 160 mil pessoas, o seu maior show
              até a data. Em fevereiro de 2017, Adele fez um tributo a
              George Michael no Grammy Awards, performando a canção "Fastlove"
              em homenagem ao músico que faleceu em dezembro de 2016. Devido a
              dificuldades técnicas que ocorreram durante a performance, Adele
              decidiu parar e reiniciar, explicando: "Eu não posso estragar tudo
              para ele". Adele no palco pirâmide do Glastonbury Festival em
              2016. Como parte de sua turnê mundial, em fevereiro e março de
              2017, Adele se apresentou na Austrália pela primeira vez, se
              apresentando em estádios ao ar livre pelo país. Seus dois
              primeiros shows na Nova Zelândia se esgotaram em um recorde de 23
              minutos, e um terceiro show foi anunciado, com todos os ingressos
              vendidos em menos de 30 minutos.Adele vendeu mais de 600 000
              ingressos para a sua turnê australiana de oito datas,
              estabelecendo recordes de estádios em todo o país; seu show em
              Sydney no ANZ Stadium em 10 de março foi assistido por 95 544
              pessoas, o maior show individual na história da Austrália, um
              recorde que ela quebrou na noite seguinte com mais de 100 000
              fãs. Adele completou sua turnê mundial com dois concertos,
              apelidado de "The Finale", no estádio de Wembley. Londres, em 28 e
              29 de junho. Ela anunciou os shows na "casa do futebol" por
              vídeo cantando o hino "Three Lions" da seleção de futebol da
              Inglaterra e também a música tema do programa semanal de futebol
              da BBC, o Match of the Day. Adele tinha adicionado outros dois
              concertos em Wembley após os dois primeiros terem seus ingressos
              esgotados, no entanto, ela cancelou os dois últimos shows
              depois de danificar suas cordas vocais.Como demonstração de
              apoio, os fãs se reuniram em frente ao estádio de Wembley para
              interpretar suas canções, em um evento intitulado "Sing for
              Adele". Em novembro de 2017 foi a segunda cantora mais bem
              paga do ano segundo a revista norte-americana Forbes, ficando
              apenas atrás da cantora Beyoncé e a frente de Taylor Swift. A
              cantora acumulou o total de US$ 69 milhões, resultado da venda de
              ingressos de sua turnê mundial do álbum 25. Em 2018, sua
              fortuna foi estimada em 147,5 milhões de libras
              esterlinas. 2018–presente: 30 Adele está a trabalhar em
              seu quarto álbum de estúdio desde 2018. Em 5 de maio de 2019,
              data de seu aniversário de 31 anos, Adele publicou várias fotos em
              preto e branco de si mesma comemorando seu aniversário junto com
              uma mensagem em sua conta do Instagram, refletindo sobre o ano
              anterior. A mensagem terminou com "30 será uma gravação de bateria
              e baixo para te incomodar". Outlets, incluindo a NME, consideraram
              o post como uma indicação da sonoridade do novo álbum e que o
              mesmo seria lançado em breve.Em 15 de
              fevereiro de 2020, Adele anunciou no casamento de sua amiga Laura
              Dockrill que seu quarto álbum de estúdio sairia em setembro de
              2020. No entanto, mais tarde ela anunciou que seu quarto
              álbum foi adiado devido a Pandemia de COVID-19. Em 24 de
              outubro de 2020, Adele fez sua primeira aparição na televisão em
              cerca de quatro anos, no Saturday Night Live, onde ela apresentou
              o programa, com a convidada musical H.E.R.. Em 30 de novembro
              de 2021, Adele anunciou uma residência em Las Vegas no The
              Colosseum at Caesars Palace, que ocorreria de 21 de janeiro de
              2022 a 16 de abril de 2022. Em 20 de janeiro, ela anunciou
              que a residência seria adiada devido a "atrasos nas entregas e à
              COVID".
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>

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
export default {
  name: "adele",
  components: {},
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
</style>