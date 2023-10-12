import styled from 'styled-components';

export const FloatButton = styled.a`
  position: fixed;
  width: 2.5rem;
  height:  2.5rem;
  bottom: 5px;
  right: 9px;
  background-color: #47625d;
  opacity: .8;
  color: #FFF;
  border-radius: 50px;
  display: flex;
align-items: center;
justify-content: center;
  font-size: 30px;
  z-index: 100;
  border: unset;
  outline: none;
  transition: all 0.5s;


  svg {
font-size:2rem;
transition: all 0.5s;
}
  &:hover {
height: 3.5rem;  
width: 3.5rem;
transition: all 0.5s;
svg  {
  font-size: 3rem;
  transition: all 0.5s;
};
};


  @media (min-width: 1200px){
width: 3rem;
height: 3rem;
bottom: 10px;
  right: 10px;

  &:hover {
height: 3.5rem;  
width: 3.5rem;
transition: all 0.5s;

svg  {
  font-size: 2.5rem;
  transition: all 0.5s;
};
};
  }

@media (min-width: 2000px){
width: 5rem;
height: 5rem;
bottom: 50px;
  right: 500px;
  svg {
font-size:2.5rem;
transition: all 0.5s;
};
  &:hover {
height: 4.5rem;  
width: 4.5rem;
transition: all 0.5s;
svg  {
  font-size: 3.5rem;
  transition: all 0.5s;
};
};
}
 
`

