import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    input: ""
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
    if (this.state.curtido === true) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }


  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) { //Se ja é falso, prq não está com o corção preto?
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario} //Resposta da 4: São props que foram declaradas no componente IconeComContador, mas que irão ter funcionalidades usando informações da pegina post. Eles vão aumentar os números de curtidas e comentarios. Ao clicar, irá add uma curtida e aletrar o valor do objeto comentario para true no outro cas.
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios} //Resposta 5: Abre o icone com o contador do lado.
        />
      </div>
      {componenteComentario} 
    </div> //Resposta 6: São utilizadas ao clicar ao clicar nos botoes de curtidas e de comentarios. E ao clicar no botão de curtir e de comentar. 
  }//Resposta 8: Ao clicar no botão de curtida da um console log com a mensagem curtiu.
}//Resposta 9: Muda o valor do comentando de false para true.
//Resposta 10: Ao clicar executa a linha 47, criando no jsx a seção comentario. Que foi importadada. Essa função adiciona um input e um botão no site.
//Resposta 11: Ela é usada no botão de enviar. Ao clicar ele adiciona um comentario, mudando o valor de numero de comentarios para 1, e vai adicionando cada vez que enviar um comentario.

export default Post