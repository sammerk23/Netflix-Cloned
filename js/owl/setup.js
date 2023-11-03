$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

  const nomes = ["House Of Cards", "Star Wars: A Ascenção Skywalker", "Pokémon", "Capitão América: Guerra Civil",
  "O Hobbit: A Batalha dos Cinco Exércitos", "Breaking Bad", "Dr House", "Sobrenatural", "Smallville",
  "Vingadores: Guerra Infinita", "Umbrella Academy"];

  const descricao = ["Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.",
"Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia.",
"Explore o mundo de Pokémon com Ash e seu parceiro Pikachu em busca do sonho do menino de ser um mestre Pokémon.",
"Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.",
"O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza.",
"Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.",
"Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.",
"Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.",
"Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.",
"Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.",
"Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade."];

  const imgFile = ["/img/capa-house.jpg","./img/capa-star.jpg", "/img/capa-pok.jpg",
"/img/capa-cap.jpg", "/img/capa-hobb.jpg", "/img/capa-break.jpg", "/img/capa-drh.jpg",
"/img/capa-sobr.jpg", "/img/capa-smal.jpg", "/img/capa-ving.jpg", "/img/capa-umb.jpg"]

const boxes = document.querySelectorAll('.box-filme');

console.log(nomes[0]);
for (let [i,x] of boxes.entries()){
    x.addEventListener('click', function handleClick(event) {
        //alert ("Hello World!");
        let caminho = 'url('+imgFile[i-6]+')';

        document.getElementById("titulo").innerHTML = nomes[i-6].toLocaleUpperCase();
        document.getElementById("descricao").innerHTML = descricao[i-6];
        document.getElementById("principal").style.backgroundImage = caminho;
        console.log(imgFile[i]);        
        //console.log(i,x);
      });

}
