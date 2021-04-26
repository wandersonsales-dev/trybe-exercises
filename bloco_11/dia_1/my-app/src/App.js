import './App.css';

const commitments = [
  'Plantão Inicial',
  'Momento Inicial',
  'Conteúdo',
  'Exercícios',
  'Plantão Final',
  'Forms',
  'Fechamento'
];

const task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    commitments.map((commitent) => task(commitent))
  );
}

export default App;
