import React from 'react'
import Logo from '../img/logo.png'
import { LogoPage, MainDefault, A, UL, DIV } from './styled'

function NavBar() {
  return (
      <MainDefault>
        <UL>
          <LogoPage src={Logo} alt='Logo'/>
            <DIV>
              <A>SOBRE</A>
              <A>PARCERIAS</A>
              <A>PRÓX. EDIÇÕES</A>
              <A>FALE CONOSCO</A>
            </DIV>
        </UL>
      </MainDefault>
  )
}

export default NavBar;
