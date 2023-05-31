let display = document.getElementById('current-operation');
let currentOperation = '';
let sinal = ""

let num1 =0; 
let num2 =0;

function appendNumber(value) {
    display.innerHTML += value;
}

function calcularPI(){
    display.innerHTML=Math.PI;
}

function Sinal(signal){
    sinal = signal;
    num1 = parseFloat(display.innerHTML)||0
    display.innerHTML =""
    if(sinal=="√"){
      display.innerHTML = Math.sqrt(num1);
      sinal = ""
    }
    if(sinal=="!"){
      num1 = fatorial(num1);
      display.innerHTML = num1;
      sinal = ""
    }
    if(sinal=="|"){
      display.innerHTML = Math.abs(num1);
      sinal = ""
    }
    if(sinal=="Sen"){
      num1 = num1*(Math.PI/180)
      display.innerHTML = parseFloat(Math.sin(num1).toFixed(4));
      sinal = ""
    }
    if(sinal=="Cos"){
      num1 = num1*(Math.PI/180)
      display.innerHTML = parseFloat(Math.cos(num1).toFixed(4));
      sinal = ""
    }
    if(sinal=="Tan"){
      num1 = num1*(Math.PI/180)
      display.innerHTML = parseFloat(Math.tan(num1).toFixed(4));
      sinal = ""
    }
    if(sinal=="Bin"){
      display.innerHTML = num1.toString(2);
      sinal = ""
    }
    if(sinal=="Hex"){
      display.innerHTML = num1.toString(16);
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
    if(sinal=="ESG"){
      var equacao = display.innerHTML;
      var solucao = segundoGrau(equacao);
      display.innerHTML ="teste"
      display.innerHTML = solucao;
    }
    if(sinal=="PIT"){
      num2 = parseFloat(display.innerHTML)
      display.innerHTML = Math.sqrt((num1*num1)+(num2*num2))
      sinal = ""
    }
    if(sinal==""){
      display.innerHTML = parseFloat(parseFloat(display.innerHTML).toFixed(4));
    }
    
}

function clearDisplay() {
    display.innerHTML = '';
    if(sinal!="ESG"){
    sinal = '';
    }
    num1 = 0;
    num2 = 0;
}




function desabilitarBotao(op) {
  clearDisplay();
  
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
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="op2"){
  var botoes = document.getElementsByClassName('Complex');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'block';
  }
  var botoes = document.getElementsByClassName('Basic');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="op3"){
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
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="ESG"){
  sinal = "ESG";
  var botoes = document.getElementsByClassName('ESG');
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
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="OT"){
  var botoes = document.getElementsByClassName('OT');
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
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="CON"){
  var botoes = document.getElementsByClassName('CON');
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
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('PIT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}

if(op=="PIT"){
  var botoes = document.getElementsByClassName('PIT');
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
  var botoes = document.getElementsByClassName('Log');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('ESG');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('OT');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
  var botoes = document.getElementsByClassName('CON');
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].style.display = 'none';
  }
}
}



function segundoGrau(equacao) {
  
    // Criar uma expressão regular para fazer a análise dos termos
    equacao = equacao +"+0x^2+0x+0"
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
      var x1 = ((-coeficientes.b + Math.sqrt(determinante)) / (2 * coeficientes.a)).toFixed(4);
      var x2 = ((-coeficientes.b - Math.sqrt(determinante)) / (2 * coeficientes.a)).toFixed(4);
      var x = "x1:"+x1+" / x2:"+x2;
      return x;
    } else if (determinante == 0) {
      var x = (-coeficientes.b / (2 *coeficientes.a)).toFixed(4);
      return x;
      } else {
      var x = "A equação não tem soluções reais."
      return x;
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

      
















