import React, { useState } from 'react';
import './App.css';

function App() {
    
    const [metaMesVol, setMetaMesVol] = useState('');
    const [metaMesOp, setMetaMesOp] = useState('');
    const [porcentagemManhaVol, setPorcentagemManhaVol] = useState('');
    const [porcentagemTardeVol, setPorcentagemTardeVol] = useState('');
    const [porcentagemNoiteVol, setPorcentagemNoiteVol] = useState('');
    const [porcentagemManhaOp, setPorcentagemManhaOp] = useState('');
    const [porcentagemTardeOp, setPorcentagemTardeOp] = useState('');
    const [porcentagemNoiteOp, setPorcentagemNoiteOp] = useState('');
    const [diasMes, setDiasMes] = useState('');
    const [diasTrabalhadosManha, setDiasTrabalhadosManha] = useState('');
    const [diasTrabalhadosTarde, setDiasTrabalhadosTarde] = useState('');
    const [diasTrabalhadosNoite, setDiasTrabalhadosNoite] = useState('');
    
    const [resultados, setResultados] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert inputs to floats
        const metaVol = parseFloat(metaMesVol);
        const metaOp = parseFloat(metaMesOp);
        const percManhaVol = parseFloat(porcentagemManhaVol);
        const percTardeVol = parseFloat(porcentagemTardeVol);
        const percNoiteVol = parseFloat(porcentagemNoiteVol);
        const percManhaOp = parseFloat(porcentagemManhaOp);
        const percTardeOp = parseFloat(porcentagemTardeOp);
        const percNoiteOp = parseFloat(porcentagemNoiteOp);
        const dias = parseInt(diasMes, 10);
        const trabManha = parseInt(diasTrabalhadosManha, 10);
        const trabTarde = parseInt(diasTrabalhadosTarde, 10);
        const trabNoite = parseInt(diasTrabalhadosNoite, 10);

        // Validations
        if (percManhaVol + percTardeVol + percNoiteVol !== 100 ||
            percManhaOp + percTardeOp + percNoiteOp !== 100 ||
            dias < 28 || dias > 31 ||
            trabManha + trabTarde + trabNoite > dias) {
            alert("Por favor, verifique se todas as porcentagens somam 100%, o número de dias está entre 28 e 31, e o total de dias trabalhados não excede o número de dias no mês.");
            return;
        }

        // Calculations
        const metaManhaVol = metaVol * (percManhaVol / 100);
        const metaTardeVol = metaVol * (percTardeVol / 100);
        const metaNoiteVol = metaVol * (percNoiteVol / 100);
        const metaManhaOp = metaOp * (percManhaOp / 100);
        const metaTardeOp = metaOp * (percTardeOp / 100);
        const metaNoiteOp = metaOp * (percNoiteOp / 100);

        const operadorManhaVol = metaManhaVol / 2.5;
        const operadorTardeVol = metaTardeVol / 2.5;
        const operadorNoiteVol = metaNoiteVol;
        const operadorManhaOp = metaManhaOp / 2.5;
        const operadorTardeOp = metaTardeOp / 2.5;
        const operadorNoiteOp = metaNoiteOp;

        const volDiaManha = operadorManhaVol / dias;
        const volDiaTarde = operadorTardeVol / dias;
        const volDiaNoite = operadorNoiteVol / dias;

        const opDiaManha = operadorManhaOp / dias;
        const opDiaTarde = operadorTardeOp / dias;
        const opDiaNoite = operadorNoiteOp / dias;

        const calculoMetaMes = (trabManha * volDiaManha) + (trabTarde * volDiaTarde) + (trabNoite * volDiaNoite);
        const calculoOperadorMes = (trabManha * opDiaManha) + (trabTarde * opDiaTarde) + (trabNoite * opDiaNoite);

        setResultados({
            calculoMetaMes,
            calculoMetaPorDia: calculoMetaMes / dias,
            calculoOperadorMes,
            calculoOperadorPorDia: calculoOperadorMes / dias
        });
    };

    return (
        <div className="App">
            <h1>Meta Calculadora</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Meta de Volume do Mês:</label>
                    <input type="number" value={metaMesVol} onChange={(e) => setMetaMesVol(e.target.value)} required />
                </div>
                <div>
                    <label>Meta de Operação do Mês:</label>
                    <input type="number" value={metaMesOp} onChange={(e) => setMetaMesOp(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Volume da Manhã:</label>
                    <input type="number" value={porcentagemManhaVol} onChange={(e) => setPorcentagemManhaVol(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Volume da Tarde:</label>
                    <input type="number" value={porcentagemTardeVol} onChange={(e) => setPorcentagemTardeVol(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Volume da Noite:</label>
                    <input type="number" value={porcentagemNoiteVol} onChange={(e) => setPorcentagemNoiteVol(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Operação da Manhã:</label>
                    <input type="number" value={porcentagemManhaOp} onChange={(e) => setPorcentagemManhaOp(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Operação da Tarde:</label>
                    <input type="number" value={porcentagemTardeOp} onChange={(e) => setPorcentagemTardeOp(e.target.value)} required />
                </div>
                <div>
                    <label>Porcentagem de Operação da Noite:</label>
                    <input type="number" value={porcentagemNoiteOp} onChange={(e) => setPorcentagemNoiteOp(e.target.value)} required />
                </div>
                <div>
                    <label>Quantos dias no mês?</label>
                    <input type="number" value={diasMes} onChange={(e) => setDiasMes(e.target.value)} min="28" max="31" required />
                </div>
                <div>
                    <label>Quantos dias o operador irá trabalhar pela manhã?</label>
                    <input type="number" value={diasTrabalhadosManha} onChange={(e) => setDiasTrabalhadosManha(e.target.value)} required />
                </div>
                <div>
                    <label>Quantos dias o operador irá trabalhar pela tarde?</label>
                    <input type="number" value={diasTrabalhadosTarde} onChange={(e) => setDiasTrabalhadosTarde(e.target.value)} required />
                </div>
                <div>
                    <label>Quantos dias o operador irá trabalhar pela noite?</label>
                    <input type="number" value={diasTrabalhadosNoite} onChange={(e) => setDiasTrabalhadosNoite(e.target.value)} required />
                </div>
                <button type="submit">Calcular</button>
            </form>
            {resultados && (
                <div>
                    <h2>Resultados:</h2>
                    <p>Meta de Volume do Mês: {resultados.calculoMetaMes.toFixed(2)}</p>
                    <p>Volume por Dia: {resultados.calculoMetaPorDia.toFixed(2)}</p>
                    <p>Meta de Operação do Mês: {resultados.calculoOperadorMes.toFixed(2)}</p>
                    <p>Operação por Dia: {resultados.calculoOperadorPorDia.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default App;
