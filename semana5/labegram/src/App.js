import React from 'react';
import './App.css';
import Post from './components/Post/Post'

class App extends React.Component {
  state = {
    postagens: [
        {nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
        {nomeUsuario: "Champions",
        fotoUsuario: "https://upload.wikimedia.org/wikipedia/commons/5/52/Uefa_champions_league_logo.png",
        fotoPost: "https://live.staticflickr.com/7061/6896933019_c904df261b_b.jpg"
      },
        {nomeUsuario: "Real Madrid",
        fotoUsuario: "https://i.ebayimg.com/images/g/hGkAAOSwP2NbTLu8/s-l300.jpg",
        fotoPost: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_%281%29.jpg"
      }
    ]
  }
  render() {
      const posts = this.state.postagens.map((postagens)=>{
        return (
          <Post
            nomeUsuario={postagens.nomeUsuario}
            fotoUsuario={postagens.fotoUsuario}
            fotoPost={postagens.fotoPost}
          />
            
          
        )
      })
      return(
        <div className={"app-container"}>
          {posts}
        </div>
      )
  }
}

export default App;
