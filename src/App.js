import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Metricas } from './components/Metricas/Metricas';
import './App.css';
import { Vagas } from './components/Vagas/Vagas';

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="metricas-container">
        <Metricas
          quantity="400+"
          title="Projetos concluídos"
          info="Nós ajudamos a construir mais de 400 projetos incríveis."
        />
        <Metricas
          quantity="100+"
          title="Colaboradores"
          info="Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes."
        />
        <Metricas
          quantity="20k"
          title="Downloads"
          info="Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes."
        />
        <Metricas
          quantity="500+"
          title="Reviews 5 estrelas"
          info="Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos."
        />
      </div>
      <Vagas />
   </main>
  );
}

export default App;
