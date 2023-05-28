let display = document.getElementById('current-operation');
let currentOperation = '';
let sinal = ""

let num1 =0; 
let num2 =0;

function appendNumber(value) {
    display.innerHTML += value;
}
function Sinal(signal){
    sinal = signal;
    num1 = parseFloat(display.innerHTML)||0
    display.innerHTML =""
    if(sinal=="√"){
      display.innerHTML = Math.sqrt(num1);
      sinal = ""
    }
}

function calculate() {
    if(sinal=="+"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1+num2
      sinal = ""
    }
    if(sinal=="-"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1-num2
      sinal = ""
    }
    if(sinal=="/"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1/num2
      sinal = ""
    }
    if(sinal=="*"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1*num2
      sinal = ""
    }
    if(sinal=="%"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1*100/num2
      sinal = ""
    }
    if(sinal=="y^x"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = Math.pow(num1,num2);
      sinal = ""
    }
    if(sinal=="Resto"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = num1%num2
      sinal = ""
    }
    if(sinal=="Log"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = Math.log(num1)/Math.log(num2)
      sinal = ""
    }
    if(sinal==""){}
    display.innerHTML = parseFloat(parseFloat(display.innerHTML).toFixed(4));
}

function clearDisplay() {
    display.innerHTML = '';
    sinal = '';
    num1 = 0;
    num2 = 0;
}

function desabilitarBotao(op) {
  clearDisplay();
  if(op=="op2"){
  var botoes = document.getElementsByClassName('Basic');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('Complex');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'block';
  }
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}
if(op=="op1"){
  var botoes = document.getElementsByClassName('Basic');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'block';
  }
  var botoes = document.getElementsByClassName('Complex');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}
if(op=="log"){
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'block';
  }
  var botoes = document.getElementsByClassName('Basic');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('Complex');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}
}


function logaritmo(x,y){
    return Math.log(x)/Math.log(y);
}
function resto(x,y){
  return x%y;
}
function porcentagem(x,y){
  return x*100/y;
}
function potencia(x,y){
  return Math.pow(x,y);
}
function raiz(x){
  return Math.sqrt(x);
}
function fatorial(x){
  if (x < 0) 
  return -1;
else if (x == 0) 
return 1;
else {
return (x * fatorial(x - 1));
}
}




function segundoGrau(equacao) {
  
    // Criar uma expressão regular para fazer a análise dos termos
    var regex = /([-+]?[0-9]*\.?[0-9]*[a-zA-Z]\^?2?|[-+]?[0-9]*\.?[0-9]+)/g;
  
    var coeficientes = {
      a: 0,
      b: 0,
      c: 0
    };
  
    var match;
    while ((match = regex.exec(equacao)) !== null) {
      var termo = match[0];
      var coeficiente = extrairCoeficiente(termo);
      var variavel = extrairVariavel(termo);
  
      // Verificar o tipo de variável e atualizar os coeficientes correspondentes
      if (variavel === 'x^2') {
        coeficientes.a += coeficiente;
      } else if (variavel === 'x') {
        coeficientes.b += coeficiente;
      } else {
        coeficientes.c += coeficiente;
      }
    }
    
      coeficientes.c = eval(coeficientes.c);


      termo = coeficientes.b.match(/[+-]?\s*\d*x/g);
      if(termo[0]=="0x"){
        termo[0]="1x";
      }
      var soma = 0;
      for (var i = 0; i < termo.length; i++) {
        var termoLimpo = termo[i].replace(/\s+|x/g, '');
        // Converte o coeficiente para número e adiciona à soma
        if(termoLimpo=="+"||termoLimpo=="-"){
          termoLimpo=termoLimpo.concat("1");
        }
        soma += Number(termoLimpo);
      }
      coeficientes.b = soma;



      termo = coeficientes.a.match(/[+-]?\s*\d*x\^2/g);
      if(termo[0]=="0x^2"){
        termo[0]="1x^2";
      }
      var soma = 0;
      for (var i = 0; i < termo.length; i++) {
        var termoLimpo = termo[i].replace(/\s+|x|\^2/g, '');
        // Converte o coeficiente para número e adiciona à soma
        if(termoLimpo=="+"||termoLimpo=="-"){
          termoLimpo=termoLimpo.concat("1");
        }
        soma += Number(termoLimpo);
      }
      coeficientes.a = soma;

    // Calcular o determinante
    var determinante = coeficientes.b * coeficientes.b - 4 * coeficientes.a * coeficientes.c;
    // Verificar as soluções da equação
    if (determinante > 0) {
      var x1 = (-coeficientes.b + Math.sqrt(determinante)) / (2 * coeficientes.a);
      var x2 = (-coeficientes.b - Math.sqrt(determinante)) / (2 * coeficientes.a);
      return { x1: x1, x2: x2 };
    } else if (determinante === 0) {
      var x = -coeficientes.b / (2 *coeficientes.a);
      return { x: x };
      } else {
      return "A equação não tem soluções reais.";
      }
      }

      // Função auxiliar para extrair o coeficiente de um termo
      function extrairCoeficiente(termo) {
      if (termo === '-' || termo === '+') {
      return termo + '1';
      }
      return termo;
      }
      
      // Função auxiliar para extrair a variável de um termo
      function extrairVariavel(termo) {
      if (termo.includes('^2')) {
      return 'x^2';
      } else if (termo.includes('x')) {
      return 'x';
      } else {
      return '';
      }
      }
      
      var equacao = "x+5x^2+8x^2-6x+7+15x^2-45x-12+x^2+x";
      var solucao = segundoGrau(equacao);
      console.log(solucao);
      
















