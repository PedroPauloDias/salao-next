import React from 'react';
import { FacebookLogo, WhatsappLogo, InstagramLogo } from "phosphor-react";
import * as S from "./style";

const WhatsappButton = ({active}) => {
  return (
    <S.Container >
    <S.ContainerSvg>
      <a href="https://wa.me/5515996042007?text=Boa%20Tarde%20Gostaria%20de%20mais%20informacoes%20sobre%20os%20seus%20Servicos%20e%20horarios%20" target="">
          <WhatsappLogo color={active ? 'white' : 'transparent'} size={25} />
       </a>
      
    </S.ContainerSvg>
    </S.Container>
  )
}

export default WhatsappButton