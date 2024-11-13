import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/components/tabViewImg.png";
import { TabViewComponent } from "../components/AllComponents/TabViewComponent";
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const initialState = {
  components: [
    {
      name: "TabView",
      image:logoPng,
      component :<TabViewComponent/>,
      codes: [
        {
          language: "jsx",
          icon: <FaReact/>,
          color: "#00D8FF",
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
          icon: <FaCss3Alt />,
          color: "#5d7dfe",
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
          `
        },
        {
          language: "json",
          icon: <FaDatabase />,
          color: "#e3f977",
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
          `
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
