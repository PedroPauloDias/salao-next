import React from 'react'
import * as S from "./style"
import Image from 'next/image';




export const Header = ({}) => {
  return (
    <S.Container>
      <img
  srcset="
   /images/backLogo2-320w.jpg 320w,
   /images/backLogo2-480w.jpeg 480w,
   /images/backLogo2.jpeg 800w
  "
  sizes="(max-width: 320px) 280px,
        (max-width: 480px) 440px,
            800px"
  src="/images/backLogo2.jpeg"
  alt="Elva dressed as a fairy" />
    </S.Container>
  )
}

 