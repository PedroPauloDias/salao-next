'use client'
import * as S from "./style"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Description = () => {
  AOS.init();

  
  
  return (
    <S.Container>     
      <S.ContainerImg data-aos="fade-right">
        <S.DoubleImg>
          <S.Img src="/images/unhas_coloridas_JW1Tkvp.webp" alt='foto de uma mao feita ' />
          <S.Img src="/images/escura.webp" alt='foto de uma mao feita ' />
        </S.DoubleImg>
        <div>
          <S.Img2 src="/images/verde.jpg" alt='foto de uma mao feita '/>
        </div>
      </S.ContainerImg>
      <S.ContainerText>
        <span>Manicure</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus neque sint, obcaecati culpa, at sit temporibus enim cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut eveniet?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus neque sint, obcaecati culpa, at sit temporibus enim cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut eveniet?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus neque sint, obcaecati culpa, at sit temporibus enim cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut eveniet?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus neque sint, obcaecati culpa, at sit temporibus enim cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut eveniet?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem doloribus neque sint, obcaecati culpa, at sit temporibus enim cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut eveniet?     at sit temporibus enimat sit temporibus cupiditate molestiae eaque odit asperiores facere adipisci impedit repellendus voluptas aut 
       
        </p>
      </S.ContainerText>
    </S.Container>


    
  )
}

export default Description