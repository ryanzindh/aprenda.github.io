function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
  // Opcional: rolar pra o formulário
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function calcularTMB(event) {
  event.preventDefault(); // Evita reload

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const atividade = parseFloat(document.getElementById('atividade').value);
  const objetivo = document.getElementById('objetivo').value;

  if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  let tmb;

  if (sexo === 'masculino') {
    tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
  } else if (sexo === 'feminino') {
    tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
  } else {
    alert('Selecione o sexo.');
    return;
  }

  let gastoTotal = tmb * atividade;

  if (objetivo === 'ganhar') {
    gastoTotal += 300;
  } else if (objetivo === 'perder') {
    gastoTotal -= 300;
  }

  document.getElementById('resultado').innerHTML = `Seu gasto calórico diário estimado é: <strong>${gastoTotal.toFixed(0)} kcal</strong>`;
}
