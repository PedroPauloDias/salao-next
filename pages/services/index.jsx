import React from 'react'
import * as S from "./style"
import { Header } from '../../components/Header';



const services = () => {
  return (
    <>
      <Header/>
      <S.Container>

        <h2>Serviços</h2>

        <S.ContainerServices>
          <div>
    <img src="../images/fibradevidro.webp" alt="" />
          </div>
          <div>
            <span>
              FIBRA DE VIDRO
            </span>
            <p>São filamentos de fibra de vidro que são moldados sobre a unha natural (ao contrário das unhas de gel que são feitas com um molde), fixadas com gel e expostas em cabine de luz. São mais resistentes que as unhas em gel ou outro tipo de alongamento, e tem um resultado mais natural.</p>
          </div>
        </S.ContainerServices>
        <S.ContainerServices>
          <div>
            <span>ACRÍLICO MOLDADO</span>
            <p>Esse tipo de alongamento para unhas é caracterizado por um tipo de alongamento que coloca moldes na unha, e finaliza com acrílico. O alongamento também pode ser feito usando tips (extensões) coladas nas pontas das unhas naturais e em seguida é acrescentando uma misturinha acrílica entre a unha natural e as extensões. </p></div>
          <div>
          <img src="../../images/acrilica.webp" alt="" />
          </div>
        </S.ContainerServices>
        <S.ContainerServices>
          <div>
          <img src="../../images/unha-gel-decorada.webp" alt="" />
          </div>
          <div>
            <span>UNHAS DE GEL</span>
            <p>As unhas de gel são feitas aplicando uma camada de gel próprio para unhas sobre a unha original e depois é necessário colocar as mãos num pequeno aparelho que emite luz ultravioleta para secar.</p></div>
        </S.ContainerServices>
        <S.ContainerServices>
          <div>
            <span>
            PASTA ACRÍLICA
            </span>
            <p>Um verdadeiro híbrido entre gel duro e acrílico, a Pasta Acrílica mantem tudo o que as técnicas de unhas gostam no acrílico e o gel duro. O produto pode ser aplicado como uma sobreposição sobre unhas naturais, uma sobreposição de tip ou esculpido sobre uma forma.</p>
          </div>
          <div>
          <img src="../../images/unhas_coloridas_JW1Tkvp.webp" alt="" />
          </div>
        </S.ContainerServices>
        <S.ContainerServices>
          <div>
          <img src="../../images/escura.webp" alt="" />
          </div>
          <div>
            <span>BANHO EM GEL</span>
            <p>O banho de gel faz com que as unhas não fiquem tão quebradiças e não descamem, além de aumentar a durabilidade do esmalte. Nele, é criada uma estruturação por cima das unhas naturais. Esse processo não alonga e não altera o comprimento das unhas. </p>
          </div>
        </S.ContainerServices>
        <S.ContainerServices>
          <div>
            <span>ESMALTAÇÃO </span>
             <span> EM GEL</span>
            
            <p>Os esmaltes em gel têm uma composição diferente dos esmaltes comuns. Eles são compostos por agentes químicos que são ativados pela luz UV em uma cabine, criando uma camada rígida polimerizada. Assim a durabilidade é maior (em média de 15 dias).</p>
          </div>
          <div>
          <img src="../../images/esmaltacao.webp" alt="" />
          </div>
        </S.ContainerServices>


      </S.Container>

    </>
  )
}

export default services;