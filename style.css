function mostrarFormulario() {
  const formulario = document.getElementById('formulario');
  formulario.style.display = 'block';
  formulario.style.opacity = 0;

  setTimeout(() => {
    formulario.style.opacity = 1;
    formulario.style.transition = 'opacity 0.8s ease';
  }, 100); // pequena espera para ativar o efeito
}

function calcularTMB(event) {
  event.preventDefault(); // Evita reload

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const idade = parseInt(document.getElementById('idade').value);
  const sexo = document.getElementById('sexo').value;
  const atividade = parseFloat(document.getElementById('atividade').value);
  const objetivo = document.getElementById('objetivo').value;
  const resultado = document.getElementById('resultado');

  // Validação
  if (
    isNaN(peso) || 
    isNaN(altura) || 
    isNaN(idade) || 
    sexo === "" || 
    isNaN(atividade) || 
    objetivo === ""
  ) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Mostrando "Calculando..." antes do resultado
  resultado.innerHTML = '<p style="color: #007bff;">Calculando...</p>';

  setTimeout(() => {
    let tmb;

    if (sexo === 'masculino') {
      tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else if (sexo === 'feminino') {
      tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    let gastoTotal = tmb * atividade;

    if (objetivo === 'ganhar') {
      gastoTotal += 300;
    } else if (objetivo === 'perder') {
      gastoTotal -= 300;
    }

    resultado.innerHTML = `
      <div class="resultado-final">
        <p>✅ Seu gasto calórico diário estimado é:</p>
        <h2>${gastoTotal.toFixed(0)} kcal</h2>
        <p><small>Lembre-se de ajustar conforme seus resultados!</small></p>
      </div>
    `;
  }, 1000); // 1 segundo pra dar aquele "peso" no loading
}
