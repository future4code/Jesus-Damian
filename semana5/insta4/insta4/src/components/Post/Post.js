import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvar from '../../img/bookmark-branco.png'
import iconeSalvado from '../../img/bookmark-preto.png'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvado: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.curtido 
      ? this.state.numeroCurtidas - 1
      : this.state.numeroCurtidas + 1
    })
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

  onClickSalvar = () => {
    console.log("Salvou!")
    this.setState({
      salvado: !this.state.salvado
    })

  }

  compartilharRedes = () => {
    console.log("Compartilhando!")
    
  }



  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else{
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.numeroCurtidas>0){
      iconeCurtida = iconeCoracaoPreto
    }

    console.log("iconeCurtida :"+iconeCurtida)

    let iconeSaved

    if(this.state.salvado){
      iconeSaved = iconeSalvado
    } else {
      iconeSaved = iconeSalvar
    }



    let componenteComentario
    let componenteCurtido

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSaved}
          onClickIcone={this.onClickSalvar}
      
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post