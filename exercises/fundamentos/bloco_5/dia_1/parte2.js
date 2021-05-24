const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
document.getElementById("page-title").innerText = "Jurassic Park"
document.getElementById("second-paragraph").innerText = "Jurassic Park foi aclamado como um marco na indústria de efeitos especiais, que foram produzidos pela Industrial Light & Magic (com efeitos criados através de computação gráfica) e pela Stan Winston Studios (com efeitos produzidos através de animatrônica). A reconstituição virtual dos dinossauros, para que 'contracenassem' com os atores em carne e osso, levou a um estrondoso sucesso de bilheteria, o que apenas confirmou o fascínio que essas criaturas extintas exercem sobre a imaginação das pessoas."
document.getElementById("paragraph").innerText = "Record de bilheterias no mundo!"
document.getElementById("subtitle").innerText = "Parque dos Dinossauros"
// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// 3. Altere algum estilo do primeiro deles.
const paragraphs = document.getElementsByClassName('paragraph');
paragraphs[0].style.color = 'green';

// 4. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.getElementsByTagName("h4")[0].style.color = "blue";