import styled from "styled-components";
import world from "../../../../public/world.jfif";
export function World() {
  return (
    <Container>
      <p>"La Tierra no es plana, y mi código tampoco."</p>
    </Container>
  );
}
const Container = styled.div`
  height: 250px;
  width: 250px;
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center;
  transition: left 0.3s linear;
  text-align: center;
  p{
    /* width: 100%; */
    position: absolute;
    /* background-color: red; */
    font-weight: 600;
    bottom: -20px;
    color: #e1dbdb;
    @media (max-width: 800px) {
        bottom: auto;
  }
}

  background: url(${world});
  background-size: cover;
  background-position: left;
  bottom: 0px;
  border-radius: 50%;
  animation: earthRotate 30s linear 0s infinite;
  box-shadow: 0px 0 20px RGBA(255, 255, 255, 0.2), -5px 0px 8px #c3f4ff inset,
    15px 2px 25px #000 inset, -24px -2px 34px #c3f4ff99 inset,
    250px 0px 44px #00000066 inset, 150px 0px 38px #000000aa inset;
}
@keyframes earthRotate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400px 0;
  }
`;
