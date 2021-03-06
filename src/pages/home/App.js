import React from 'react';
import Menu from '../../componentes/Menu/Index';
import BannerMain from '../../componentes/BannerMain/index.js';
import Carousel from '../../componentes/Carousel/index.js';
import Footer from '../../componentes/Footer/index.js';
import dadosIniciais from '../../data/dados_iniciais.json';


function App() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu/>

      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Primeiro teste"}>
      </BannerMain>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}>
      </Carousel>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[1]}>
      </Carousel>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[2]}>
      </Carousel>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[3]}>
      </Carousel>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[4]}>
      </Carousel>

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[5]}>
      </Carousel>

      <Footer>

      </Footer>

    </div>
  );
}

export default App;
