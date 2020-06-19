import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQH9wGmQ4u_auA/profile-displayphoto-shrink_400_400/0?e=1597881600&v=beta&t=Tjd7gDe86_eQ_eFxWzBiu3-uCLdTZmZSBoANm6ZLCMc" 
          nome="Vinícius Fredeanelle Sucupira de Assis" 
          descricao="Sou estudante de programação na Labenu, 
          Curso de desenvolvimento Web-Full Stack.
          Sou uma pessoa determinada, de fácil aprendizado, auto gerenciável e gosto de trabalhar em equipe."/>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <section className="page-section-container">
        <CardPequeno 
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          tipo = "Email: "
          descricao = "paddingleft@gmail.com"        />
        <CardPequeno 
          imagem="https://static.vecteezy.com/system/resources/previews/000/583/611/non_2x/location-icon-vector.jpg"
          tipo = "Endereço:"
          descricao = "Rua Bananinha 130"
        />
      </section>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudei e me tornei dev Web Full-Stack. E fui contratado após o curso." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Trabalhando desde minha formação na Labenu" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
