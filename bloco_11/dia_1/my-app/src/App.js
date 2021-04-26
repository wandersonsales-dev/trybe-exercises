import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    task('Hello World!')
  );
}

export default App;
