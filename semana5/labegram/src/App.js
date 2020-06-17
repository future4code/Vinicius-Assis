import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Champions'}
          fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/5/52/Uefa_champions_league_logo.png'}
          fotoPost={'https://live.staticflickr.com/7061/6896933019_c904df261b_b.jpg'}
        />
        <Post
          nomeUsuario={'Real Madrid'}
          fotoUsuario={'https://i.ebayimg.com/images/g/hGkAAOSwP2NbTLu8/s-l300.jpg'}
          fotoPost={'https://upload.wikimedia.org/wikipedia/commons/e/e7/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_%281%29.jpg'}
        />
      </div>
    );
  }
}

export default App;
