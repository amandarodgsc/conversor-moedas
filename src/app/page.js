import { useFormik } from 'formik';
import { FaDollarSign, FaEuroSign, FaBitcoin } from 'react-icons/fa';

export default function Page() {
  const formik = useFormik({
    initialValues: {
      valor: '',
      moeda: '',
    },
    onSubmit: (values) => {
      const valorReais = parseFloat(values.valor);
      let resultado;

      switch (values.moeda) {
        case 'dolar':
          resultado = (valorReais * 0.20).toFixed(2);
          break;
        case 'euro':
          resultado = (valorReais * 0.18).toFixed(2);
          break;
        case 'bitcoin':
          resultado = (valorReais * 0.000003).toFixed(6);
          break;
        default:
          resultado = 0;
      }

      alert(`Valor convertido: ${resultado} ${values.moeda}`);
    },
  });

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Conversor de Moedas</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="valor">Valor em R$:</label>
          <input
            id="valor"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.valor}
            required
          />
        </div>
        <div>
          <label htmlFor="moeda">Escolha a moeda:</label>
          <select
            id="moeda"
            onChange={formik.handleChange}
            value={formik.values.moeda}
            required
          >
            <option value="">Selecione</option>
            <option value="dolar">Dólar <FaDollarSign /></option>
            <option value="euro">Euro <FaEuroSign /></option>
            <option value="bitcoin">Bitcoin <FaBitcoin /></option>
          </select>
        </div>
        <button type="submit">Converter</button>
        <button type="button" onClick={() => formik.resetForm()}>Limpar</button>
      </form>
    </div>
  );
}
