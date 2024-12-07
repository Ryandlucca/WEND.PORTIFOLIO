import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Ryans Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
           Olá! Eu sou Ryan, um técnico de TI e entusiasta do java e python. perdoe a falta de criativadade nesse portifolio, entretando, Adoro criar aplicações inovadoras e explorar tecnologias modernas, não sou um bom desenvolvedor neste framework e nem em javaScript mas ta entregue
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Sistema financeiro Platarforma SteamPlus</h3>
            <p>Plataforma para pagemnto e assinaturasa.</p>
          </div>
          <div className="project-card">
            <h3>Reconhecimento facil para condominio</h3>
            <p> reconhece o rosto e libera a porta..</p>
          </div>
          <div className="project-card">
            <h3>Totem de auto-atendimento</h3>
            <p>Totem de auto-atendimento ligado ao banco de dados do estoque.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Se você gostaria de colaborar ou tiver alguma dúvida, sinta-se à vontade para entrar em contato!</p>
        <ul>
          <li>Email: <a href="mailto:ryan@example.com">ryandeluccar@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/ryan" target="_blank" rel="noopener noreferrer">linkedin.com/in/ryan</a></li>
          <li>GitHub: <a href="https://github.com/ryan" target="_blank" rel="noopener noreferrer">github.com/ryan</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2024 Ryan.</p>
      </footer>
    </div>
  );
};

export default App;
