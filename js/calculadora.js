document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    // Verifica se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        document.getElementById('result').innerHTML = '<p class="rejected">Insira notas válidas entre 0 e 10.</p>';
        return;
    }

    // Cálculo da média regimental
    const media = (nota1 * 0.4) + (nota2 * 0.6);
    const isApproved = media >= 6.0;

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Sua média é: <span class="media">${media.toFixed(2)}</span></p>
        <p class="${isApproved ? 'approved' : 'rejected'}">
            ${isApproved ? 'Aprovado' : 'Reprovado'}
        </p>
    `;
});