import React from "react"
import * as S from "./style"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Star}  from "phosphor-react"

const Testimonials = () => {

  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }


  return (
    <S.Container>
      
      <S.Title>Depoimentos das nossas Clientes
        <div>
        <Star size={16} weight="fill" />
        <Star size={16} weight="fill" />
        <Star size={16} weight="fill" />
        <Star size={16} weight="fill" />
        <Star size={16} weight="fill" />      
        </div>
      </S.Title>  
   
      <Slider {...settings}>
        <S.TestContainer>
          <S.TContainer>
            <div>
              <S.Photo src="/images/juliana.jpg" />
            </div>
            <div>
              <span>Juliana B.</span>
              <p>

                Eu amo o trabalho dela!!ela é uma profissional incrível.  ❤️
              </p>
            </div>

          </S.TContainer>
        </S.TestContainer>
        <S.TestContainer>
          <S.TContainer>
            <div>
              <S.Photo src="/images/ingrid.jpg" />
            </div>
            <div>
              <span>Ingrid Souza.</span>
              <p>
                Sou cliente há mais de 10 anos !Super profissional
              </p>
            </div>

          </S.TContainer>
        </S.TestContainer>
        <S.TestContainer>
          <S.TContainer>
            <div>
              <S.Photo src="/images/marina.jpg" />
            </div>
            <div>
              <span>Marina Pereira.</span>
              <p>
                Profissional altamente qualificada. espaço ótimo e agradável
              </p>
            </div>

          </S.TContainer>
        </S.TestContainer>
        <S.TestContainer>
          <S.TContainer>
            <div>
              <S.Photo src="/images/tabata.jpg" />
            </div>
            <div>
              <span>Tabata Silva.</span>
              <p>
                uma das melhores profissionais que conheço!
              </p>
            </div>

          </S.TContainer>
        </S.TestContainer>

        <S.TestContainer>
          <S.TContainer>
            <div>
              <S.Photo src="/images/ingrid.jpg" />
            </div>
            <div>
              <span>Francisca </span>
              <p>
                profissional altamente qualificada. espaço ótimo e agradável
              </p>
            </div>

          </S.TContainer>
       
        </S.TestContainer>
        
          <S.TestContainer>
            
          <S.TContainer>
            <div>
              <S.Photo src="/images/juliana.jpg" />
            </div>
            <div>
              <span>Judith B.</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

          </S.TContainer>
        </S.TestContainer>
      </Slider>
    </S.Container>
  )
}
export default Testimonials;
