import './App.css';
import Layout from './components/Layout/Layout';
import Homepage from './pages/Hompage'; // Import du composant Homepage

function App() {
  return (
    <Layout>
      <Homepage /> {/* Utilisation du composant Homepage */}
    </Layout>
  );
}

export default App;
