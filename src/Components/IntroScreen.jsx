// IntroScreen.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import react from "../../src/assets/react.svg";
import { FirebaseLogoWithFire } from "./FirebaseLogoWithFire";
export function IntroScreen({ setActive }) {
  const [isVisible, setIsVisible] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [reactVisible, setReactVisible] = useState(false);
  useEffect(() => {
    setActive(false);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5500); // Duración de la animación en milisegundos para que la opacidad pase de 1 a 0
    const hiden = setTimeout(() => {
      setHidden(false);
    }, 6000); // Duración de la animación en milisegundos para que su display sea none

    return () => {
      clearTimeout(timer);
      clearTimeout(hiden);
    }; // Limpia el timer si el componente se desmonta
  }, []);

  return (
    <>
      {hidden ? (
        <IntroScreenContainer visible={isVisible} reactVisible={reactVisible} >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="250"
            height="250"
            viewBox="0 0 320 352"
            enableBackground="new 0 0 320 352"
            xmlSpace="preserve"
          >
            <path
              className="svg-path"
              fill="white"
              opacity="1.000000"
              stroke="none"
              d=" 
          M156.556870,332.943359 
              C151.753708,327.912384 146.446442,323.371704 142.297684,317.705658 
              C135.496414,308.417084 129.034805,298.994720 127.332108,287.219116 
              C124.693726,268.972473 129.565750,252.320984 138.143112,236.465729 
              C147.083557,219.939285 159.935852,206.346344 171.686127,191.939529 
              C183.580460,177.356094 194.896027,162.498230 203.638367,145.645096 
              C213.923477,125.817856 214.187088,106.367729 204.589294,86.481392 
              C195.450760,67.546669 181.293991,52.612186 165.965271,38.744843 
              C159.902496,33.260071 153.768936,27.600040 145.986160,24.000816 
              C144.562286,27.101120 145.504654,29.165009 147.540909,31.361532 
              C151.253006,35.365807 154.621628,39.601360 156.730255,44.826332 
              C161.001923,55.411045 163.028458,66.271935 163.842529,77.706123 
              C164.827576,91.541679 163.116302,104.507927 156.574158,116.679581 
              C149.027847,130.719467 138.550171,142.539719 127.501465,153.871857 
              C116.646080,165.005722 104.986389,175.287964 93.523834,185.777649 
              C86.257874,192.426956 79.688652,199.748703 73.886147,207.658508 
              C64.606003,220.308975 57.772774,234.176239 57.477383,250.215195 
              C57.053329,273.240448 69.353729,290.377686 85.492676,304.693512 
              C106.258965,323.113953 130.606995,335.582184 157.130890,343.818390 
              C160.089447,344.737091 162.789139,346.337036 166.758270,345.280792 
              C164.467926,340.209076 160.351868,337.140411 156.556870,332.943359 
          M204.591721,255.109070 
              C212.093567,246.907043 219.603653,238.712540 227.095596,230.501480 
              C242.981613,213.090561 249.354233,191.992859 250.570358,169.023895 
              C251.267639,155.854401 249.971893,142.820602 245.490555,130.328461 
              C243.351532,124.365715 240.815338,118.458786 235.635666,113.943993 
              C234.092514,116.393509 235.465942,118.283691 235.542084,120.178864 
              C235.621185,122.147255 236.201492,124.089752 236.400970,126.059944 
              C238.554916,147.334427 231.064209,165.688126 218.458405,182.094757 
              C208.245270,195.387268 197.088104,207.950241 186.535858,220.987518 
              C174.739395,235.562057 164.659592,251.066223 160.876526,269.904297 
              C157.960892,284.422913 158.652985,298.269104 167.330841,310.938599 
              C168.789551,313.068268 170.373962,314.745941 173.518600,315.005371 
              C174.191711,312.303467 175.441193,309.731934 175.352692,307.207336 
              C175.023605,297.820129 178.133072,289.512238 182.925980,281.789673 
              C188.875229,272.203888 195.214951,262.863586 204.591721,255.109070 
          M231.894135,307.380890 
              C239.524231,302.346161 246.929626,297.132874 252.984711,290.074371 
              C261.265045,280.421906 268.049377,270.079254 268.517090,257.006226 
              C268.942200,245.124985 264.889496,234.216736 259.335724,223.866150 
              C258.572205,222.443192 257.625977,220.886993 255.409058,221.630081 
              C255.167206,222.028519 254.757843,222.422852 254.690292,222.868927 
              C254.517014,224.013031 254.369385,225.187042 254.432556,226.336960 
              C255.229660,240.844269 250.313370,253.205338 241.292191,264.474152 
              C238.783112,267.608398 235.445404,269.865173 233.325241,273.190308 
              C228.524124,280.720123 221.411499,286.087677 214.759995,291.516724 
              C201.568680,302.283752 191.814606,314.711609 188.138275,331.648224 
              C187.299454,335.512604 187.927322,338.548370 189.330307,341.985260 
              C195.113724,336.203949 198.918549,329.407532 205.386276,324.593445 
              C213.694168,318.409637 222.920990,313.777466 231.894135,307.380890 
          z"
            />
          </svg>
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter
                  .typeString("MSA COD 117")
                  .callFunction(() => {
                    typewriter.stop();
                  })
                  .start();
                  setReactVisible(!reactVisible)
                  
              }, 1500); // retrasa los segundos que se coloque
            }}
            options={{
              autoStart: false, // Desactiva el inicio automático para controlar el inicio manualmente
              loop: false,
              deleteSpeed: 0,
              delay: 75,
              cursor: "", // Oculta el cursor
            }}
          />
          <ContentLogos>
              <img src={react} alt="" className="react" />
          <FirebaseLogoWithFire/>
          </ContentLogos>
        
        </IntroScreenContainer>
      ) : null}
    </>
  );
}

// Definimos la animación
const flashIntro = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  20% {
    opacity: 1;
    transform: scale(1.3);
  }
  80% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);

  }
`;
// Definimos la animación
const rotate = keyframes`
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
`;

// Componente de pantalla de introducción
const IntroScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  /* animation: ${flashIntro} 1.5s ease-out forwards; */
  transition: all 0.5s ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  z-index: 100;
  gap: 10px;
.react{
  width:50px;
  transition: all 0.5s ease;
  opacity: ${(props)=>props.reactVisible ? "1": "0"};
  animation: ${rotate} 2s linear infinite;
  
}
  /* Media queries para ajustar el tamaño del texto en pantallas más pequeñas */
  @media (max-width: 800px) {
    font-size: 30px; /* Tamaño de fuente para pantallas pequeñas */
  }

  @media (max-width: 500px) {
    font-size: 24px; /* Tamaño de fuente para pantallas muy pequeñas */
  }
  svg {
    animation: ${flashIntro} 1.5s ease-out forwards;
    @media (max-width: 800px) {
      width: 150px;
      height: 150px;
    }
  }
  .svg-path {
    stroke: white; /* Color del borde */
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 2s linear forwards; /* Duración y tipo de animación */
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1000; /* Empieza desde el valor total */
    }
    to {
      stroke-dashoffset: 0; /* Llega al final */
    }
  }
`;
const ContentLogos = styled.div`
display:flex;
gap: 10px;
`;