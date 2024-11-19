import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/components/tabViewImg.png";
import { TabViewComponent } from "../components/AllComponents/TabViewComponent"
import { BackgroundComponent } from "../components/AllComponents/BackgroundComponent";
import { CardLoadComponent } from "../components/AllComponents/CardLoadComponent";
import { RadioInputsSelect } from "../components/AllComponents/RadioInputsSelect";
import { InputText } from "../components/AllComponents/InputText";
import { SideBarComponent } from "../components/AllComponents/SidebarComponent";

const initialState = {
  components: [
    {
      name: "TabView",
      image: logoPng,
      component: <TabViewComponent />,
      codes: [
        {
          language: "jsx",
          code: `
            import { useState } from "react";
            import "./TabView.css";

            export function TabView({ items }) {
              const [selectedIcon, setSelectedIcon] = useState(0);
              const [prevIcon, setPrevIcon] = useState(0);

              const handleIconClick = (index) => {
                setPrevIcon(selectedIcon);
                setSelectedIcon(index);
              };

              return (
                <div className="content">
                  <div className="contenIcon">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className={\`iconItem \${selectedIcon === index ? "selected" : ""}\`}
                        onClick={() => handleIconClick(index)}
                      >
                        <div
                          className="iconContainer"
                          style={{
                            color: item.color,
                            transform: selectedIcon === index ? "scale(1.2)" : "scale(1)",
                            filter: selectedIcon === index
                              ? \`drop-shadow(0 0 10px \${item.color || "rgba(255, 215, 0, 0.8)"})
                                drop-shadow(0 0 20px \${item.color || "rgba(255, 215, 0, 0.5)"})
                                drop-shadow(0 0 30px \${item.color || "rgba(255, 215, 0, 0.3)"})\`
                              : "none"
                          }}
                        >
                          <item.icon size={25} />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="componentContainer">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className={\`animatedComponent \${selectedIcon === index ? "selected" : ""} \${prevIcon === index ? "prevSelected" : ""}\`}
                      >
                        {item.component}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            `,
        },
        {
          language: "css",
          code: `
          /* Content */
          .content {
            height: 100%;
            width: 100%;
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 5px;
          }

          /* Icon Container */
          .contenIcon {
            display: flex;
            padding: 10px;
            justify-content: center;
            gap: 20px;
            width: auto;
            overflow: hidden;
            background-color: rgba(46, 46, 46, 0.73);
            flex-wrap: wrap;
            border-radius: 15px;
          }

          .iconItem {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          }

          .iconItem span {
            margin-top: 5px;
            color: black;
          }

          .iconItem.selected span {
            color: white;
          }

          .iconContainer {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
          }

          /* Component Container */
          .componentContainer {
          width: 90%;
          height: 200px;
          position: relative; /* Necesario para las animaciones absolutas */
          overflow-y: auto;
          overflow-x: hidden;
          background-color: transparent;
          color:white;
          border-radius: 10px;
          }

          /* Animated Component */
          .animatedComponent {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            background-color: #2a2a2a;
            opacity: 0;
            transform: translateX(-100%);
          }

          .animatedComponent.selected {
            opacity: 1;
            transform: translateX(0);
          }

          .animatedComponent.prevSelected {
            transform: translateX(100%);
          }
          `,
        },
        {
          language: "json",
          code: `
          const data = [
          {
            icon: <p>icon</p>,
            name: "name",
            color: "#00D8FF",
            component: <h1>component 1</h1>,
          },
          {
            icon: <p>icon</p>,
            name: "name",
            color: "#ff2d1e",
            component: <h1>component 2</h1>,
          },
          {
            icon: <p>icon</p>,
            name: "name",
            color: "#6C287E",
            component:<h1>component 3</h1>,
          },
          {
            icon: <p>icon</p>,
            name: "name",
            color: "#E8D44D",
            component: <h1>component 4</h1>,
          },
          {
            icon: <p>icon</p> ,
            name: "name",
            color: "#0E82A7",
            component: <h1>component 5</h1> ,
          },
        ];
          `,
        },
      ],
    },
    {
      name: "BackGround",
      image: "https://i.ibb.co/tckf9Gq/Captura-de-pantalla-2024-11-18-103047.png",
      component: <BackgroundComponent />,
      codes: [
        {
          language: "html",
          code: `
            /* From Uiverse.io by csemszepp */ 
            <div class="container"></div>

            `,
        },
        {
          language: "css",
          code: `
            .container {
            width: 100%;
            height: 100%;
            --s: 200px; /* control the size */
            --c1: #1d1d1d;
            --c2: #4e4f51;
            --c3: #3c3c3c;

            background: repeating-conic-gradient(
                  from 30deg,
                  #0000 0 120deg,
                  var(--c3) 0 180deg
                )
                calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
              repeating-conic-gradient(
                from 30deg,
                var(--c1) 0 60deg,
                var(--c2) 0 120deg,
                var(--c3) 0 180deg
              );
            background-size: var(--s) calc(var(--s) * 0.577);
          }

          `,
        },
      ],
    },
    {
      name: "Card Load",
      image: "https://i.ibb.co/3TQnNs2/Captura-de-pantalla-2024-11-18-215250.png",
      component: <CardLoadComponent />,
      codes: [
        {
          language: "html",
          code: `
          /* From Uiverse.io by mrhyddenn */ 
          <div class="card">
              <div class="card_load"></div>
              <div class="card_load_extreme_title"></div>
              <div class="card_load_extreme_descripion"></div>
          </div>

            `,
        },
        {
          language: "css",
          code: `
            /* From Uiverse.io by mrhyddenn */ 
            .card {
              width: 190px;
              height: 90px;
              background: #ffff;
              box-shadow: 0 1px 25px rgba(0,0,0,0.2);
              position: absolute;
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
              padding: 12px 10px;
            }

            .card_load {
              width: 70px;
              height: 70px;
              position: relative;
              float: left;
              background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 
              40%, #e5e5e5 48%);
              border-radius: 50%;
              background-size: 200% 100%;
              background-position: 100% 0;
              animation: load89234 2s infinite;
            }

            .card_load_extreme_title {
              width: 90px;
              height: 10px;
                  position: relative;
                    float: right;
                    border-radius: 5px;
                    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 
                    40%, #e5e5e5 48%);
                    background-size: 200% 100%;
                    background-position: 100% 0;
                    animation: load89234 2s infinite;
                  }

            .card_load_extreme_descripion {
              width: 90px;
              height: 47px;
              position: relative;
              float: right;
              border-radius: 5px;
              background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 
              40%, #e5e5e5 48%);
              margin-top: 10px;
              background-size: 200% 100%;
              background-position: 100% 0;
              animation: load89234 2s infinite;
            }

            @keyframes load89234 {
              100% {
                background-position: -100% 0;
              }
            }

          `,
        },
      ],
    }, 
    {
      name: "Radio select input",
      image: "https://i.ibb.co/VLwdTpv/Captura-de-pantalla-2024-11-18-224648.png",
      component: <RadioInputsSelect />,
      codes: [
        {
          language: "html",
          code: `
          /* From Uiverse.io by Smit-Prajapati */ 
          <div class="radio-container">
            <input checked="" id="radio-free" name="radio" type="radio" />
            <label for="radio-free">Free</label>
            <input id="radio-basic" name="radio" type="radio" />
            <label for="radio-basic">Basic</label>
            <input id="radio-premium" name="radio" type="radio" />
            <label for="radio-premium">Premium</label>

            <div class="glider-container">
              <div class="glider"></div>
            </div>
          </div>

            `,
        },
        {
          language: "css",
          code: `
            /* From Uiverse.io by Smit-Prajapati */ 
            .radio-container {
              --main-color: #f7e479;
              --main-color-opacity: #f7e4791c;

              /* change this according inputs count */
              --total-radio: 3;

              display: flex;
              flex-direction: column;
              position: relative;
              padding-left: 0.5rem;
            }
            .radio-container input {
              cursor: pointer;
              appearance: none;
            }
            .radio-container .glider-container {
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(27, 27, 27, 1) 50%,
                rgba(0, 0, 0, 0) 100%
              );
              width: 1px;
            }
            .radio-container .glider-container .glider {
              position: relative;
              height: calc(100% / var(--total-radio));
              width: 100%;
              background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0) 0%,
                var(--main-color) 50%,
                rgba(0, 0, 0, 0) 100%
              );
              transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
            }
            .radio-container .glider-container .glider::before {
              content: "";
              position: absolute;
              height: 60%;
              width: 300%;
              top: 50%;
              transform: translateY(-50%);
              background: var(--main-color);
              filter: blur(10px);
            }
            .radio-container .glider-container .glider::after {
              content: "";
              position: absolute;
              left: 0;
              height: 100%;
              width: 150px;
              background: linear-gradient(
                90deg,
                var(--main-color-opacity) 0%,
                rgba(0, 0, 0, 0) 100%
              );
            }
            .radio-container label {
              cursor: pointer;
              padding: 1rem;
              position: relative;
              color: grey;
              transition: all 0.3s ease-in-out;
            }

            .radio-container input:checked + label {
              color: var(--main-color);
            }

            .radio-container input:nth-of-type(1):checked ~ .glider-container .glider {
              transform: translateY(0);
            }

            .radio-container input:nth-of-type(2):checked ~ .glider-container .glider {
              transform: translateY(100%);
            }

            .radio-container input:nth-of-type(3):checked ~ .glider-container .glider {
              transform: translateY(200%);
            }

            .radio-container input:nth-of-type(4):checked ~ .glider-container .glider {
              transform: translateY(300%);
            }

            .radio-container input:nth-of-type(5):checked ~ .glider-container .glider {
              transform: translateY(400%);
            }

            .radio-container input:nth-of-type(6):checked ~ .glider-container .glider {
              transform: translateY(500%);
            }

            .radio-container input:nth-of-type(7):checked ~ .glider-container .glider {
              transform: translateY(600%);
            }

            .radio-container input:nth-of-type(8):checked ~ .glider-container .glider {
              transform: translateY(700%);
            }

            .radio-container input:nth-of-type(9):checked ~ .glider-container .glider {
              transform: translateY(800%);
            }

            .radio-container input:nth-of-type(10):checked ~ .glider-container .glider {
              transform: translateY(900%);
            }


          `,
        },
      ],
    },
    {
      name: "Input Text",
      image: "https://i.ibb.co/ZxXHs1R/Captura-de-pantalla-2024-11-18-225731.png",
      component: <InputText />,
      codes: [
        {
          language: "html",
          code: `
          /* From Uiverse.io by VijinV */ 
          <div class="inputbox">
              <input required="required" type="text">
              <span>Username</span>
              <i></i>
          </div>

            `,
        },
        {
          language: "css",
          code: `
            /* From Uiverse.io by VijinV */ 
            .inputbox {
              position: relative;
              width: 196px;
            }

            .inputbox input {
              position: relative;
              width: 100%;
              padding: 20px 10px 10px;
              background: transparent;
              outline: none;
              box-shadow: none;
              border: none;
              color: #23242a;
              font-size: 1em;
              letter-spacing: 0.05em;
              transition: 0.5s;
              z-index: 10;
            }

            .inputbox span {
              position: absolute;
              left: 0;
              padding: 20px 10px 10px;
              font-size: 1em;
              color: #8f8f8f;
              letter-spacing: 00.05em;
              transition: 0.5s;
              pointer-events: none;
            }

            .inputbox input:valid ~span,
            .inputbox input:focus ~span {
              color: #45f3ff;
              transform: translateX(-10px) translateY(-34px);
              font-size: 0,75em;
            }

            .inputbox i {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 2px;
              background: #45f3ff;
              border-radius: 4px;
              transition: 0.5s;
              pointer-events: none;
              z-index: 9;
            }

            .inputbox input:valid ~i,
            .inputbox input:focus ~i {
              height: 44px;
            }
          `,
        },
      ],
    },
    {
      name: "Sidebar",
      image: "https://i.ibb.co/gw3F9mS/Captura-de-pantalla-2024-11-18-235518.png",
      component: <SideBarComponent />,
      codes: [
        {
          language: "jsx",
          code: `
          import { useState, useEffect } from "react";
          import { NavLink } from "react-router-dom";
          import { IoMdGlasses } from "react-icons/io";
          import { FaGlasses } from "react-icons/fa";
          import { GiMedicinePills, GiSellCard } from "react-icons/gi";
          import "./SideBarComponent.css";

          export function SideBarComponent() {
            const [active, setActive] = useState(false);


            return (
              <div className="content-all">
                <div className={\`conten-sidebar \${active ? "active" : ""}\`}>
                  <ActiveBall event={() => setActive(!active)} active={active} />
                  <div className={\`content \${active ? "active" : ""}\`}>
                    <span className="decorate" />
                    <div className="conten-items">
                      {DataItems.map((item, index) => (
                        <Item key={index} item={item} subItem={item.subItems} active={active} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          function Item({ item, subItem, active }) {
            const [activeText, setActiveText] = useState(false);

            useEffect(() => {
              if (active) {
                const intervalId = setInterval(() => setActiveText(true), 300);
                return () => clearInterval(intervalId);
              } else {
                setActiveText(false);
              }
            }, [active]);

            return (
              <div className="item-content">
                <div className="title">
                  <h3>{activeText ? item.name : item.name.charAt(0).toUpperCase()}</h3>
                </div>
                <div className="conten-sub-items">
                  {subItem.map((sub, index) => (
                    <NavLink
                      key={index}
                      to={sub.path}
                      onClick={(event) => event.preventDefault()}
                    >
                      <div className="sub-item">
                        <p className="label">
                          <div className="icon">{<sub.icon />}</div>
                          {activeText ? sub.name : sub.name.charAt(-1).toUpperCase()}
                        </p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          function ActiveBall({ event, active }) {
            return (
              <button className={\`ball-div \${active ? "active" : ""}\`} onClick={event}>
                {active ? "♦" : "♣"}
              </button>
            );
          }

            `,
        },
        {
          language: "css",
          code: `
            .content-all {
              display: flex;
              align-items: center;
              justify-content: center;
              max-height: 90%;
              margin-top: 10px;
            }

            .conten-sidebar {
              width: 80px;
              display: flex;
              transition: all 0.5s ease;
              position: relative;
              align-items: center;
              flex-shrink: 0;
              background-color: #575757;
              margin: 20px 0;
              border-radius: 5px;
            }

            .conten-sidebar.active {
              width: 300px;
            }

            .content {
              width: 50px;
              height: 95%;
              border-radius: 20px;
              background-color: #3d3d3d;
              transition: all 0.5s ease;
              display: flex;
              align-items: center;
              flex-direction: column;
              margin-left: 10px;
            }

            .content.active {
              width: 95%;
            }

            .decorate {
              height: 3px;
              width: 50%;
              background-color: #c5c5c5;
              border-radius: 50px;
              transition: all 0.5s ease;
            }

            .content.active .decorate {
              width: 60%;
            }

            /* Items */
            .conten-items {
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              width: 95%;
              align-items: center;
              overflow-y: auto;
              gap: 20px;
              padding: 5px 0;
            }

            .item-content {
              width: 90%;
              display: flex;
              flex-direction: column;
              transition: all 0.5s ease;
            }

            .title h3 {
              text-transform: capitalize;
              font-weight: 900;
              text-align: center;
              margin: 0;
            }

            /* Sub Items */
            .conten-sub-items {
              display: flex;
              flex-direction: column;
              gap: 5px;
            }

            .sub-item {
              width: 220px;
              padding: 5px;
              display: flex;
              align-items: center;
              border-radius: 15px;
              transition: all 0.2s ease;
              cursor: pointer;
            }

            .sub-item:hover {
              background-color: rgb(185, 185, 185);
            }

            .label {
              display: flex;
              align-items: center;
              gap: 5px;
            }

            /* Active Ball */
            .ball-div {
              width: 25px;
              height: 25px;
              position: absolute;
              top: 0;
              right: -10px;
              background-color: red;
              border: none;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }

            .ball-div.active {
              right: 10px;
            }

          `,
        },
        {
          language: "json",
          code: `
          const DataItems = [
            {
              name: "Balance",
              path: "/balance",
              subItems: [
                { name: "Listado de Productos", path: "/", icon: IoMdGlasses },
                { name: "Venta de Lentes", path: "/", icon: GiSellCard },
                { name: "Categorias", path: "/", icon: IoMdGlasses },
              ],
            },
            {
              name: "Insumos",
              subItems: [
                { name: "Monturas", path: "/", icon: FaGlasses },
                { name: "Lunas", path: "/", icon: IoMdGlasses },
                { name: "Medicamentos", path: "/", icon: GiMedicinePills },
              ],
            },
          ];

          `,
        },
      ],
    },
    
  ],
  loading: false,
  error: null,
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    Start: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess: (state, action) => {
      state.loading = false;
      state.components = action.payload;
    },
    Failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { Start, fetchEventsSuccess, Failure } = componentsSlice.actions;
export default componentsSlice.reducer;
