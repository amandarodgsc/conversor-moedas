import React, { useState } from 'react';

export default function ConversorMoedas() {
  const [valorReal, setValorReal] = useState('');
  const [moeda, setMoeda] = useState('dolar');
  const [resultado, setResultado] = useState(null);

  const taxasConversao = {
    dolar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003
  };

  const handleConverter = () => {
    if (valorReal && moeda) {
      const valorConvertido = valorReal * taxasConversao[moeda];
      setResultado(valorConvertido.toFixed(6));
    }
  };

  const handleLimpar = () => {
    setValorReal('');
    setMoeda('dolar');
    setResultado(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Conversor de Moedas</h1>
      <div>
        <label>Valor em Reais (R$): </label>
        <input
          type="number"
          value={valorReal}
          onChange={(e) => setValorReal(e.target.value)}
        />
      </div>
      <div>
        <label>Escolha a Moeda: </label>
        <select value={moeda} onChange={(e) => setMoeda(e.target.value)}>
          <option value="dolar">Dólar</option>
          <option value="euro">Euro</option>
          <option value="bitcoin">Bitcoin</option>
        </select>
      </div>
      <div>
        <button onClick={handleConverter}>Converter</button>
        <button onClick={handleLimpar} style={{ marginLeft: '10px' }}>Limpar</button>
      </div>
      {resultado && (
        <div style={{ marginTop: '20px' }}>
          <h2>Resultado: {resultado} {moeda === 'bitcoin' ? 'BTC' : moeda === 'dolar' ? 'USD' : 'EUR'}</h2>
        </div>
      )}
    </div>
  );
}
