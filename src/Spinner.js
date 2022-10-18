import styled from 'styled-components';

const Spinner = styled.svg`
animation: spinner 3.5s linear infinite;
display: flex;
margin: 70px auto;
top: 50%;
left: 50%;
width: 100px;
height: 50px;
transform: translate(-50%, -50%);
border-radius: 150px 150px 0 0;
background-color: #4D4D4D; 
  
@keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;