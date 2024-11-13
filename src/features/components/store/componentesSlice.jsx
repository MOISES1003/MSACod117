import { createSlice } from "@reduxjs/toolkit";
import logoPng from "../../../assets/projects/Member.jpg";
import logo2 from "../../../assets/languages/php.png";
import { TabViewComponent } from "../components/AllComponents/TabViewComponent";
const initialState = {
  components: [
    {
      name: "TabView",
      image:logoPng,
      component :<TabViewComponent/>,
      codes: [
        {
          lenguage: "jsx",
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
          lenguage: "css",
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
            height: 80vh;
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
            background-color: transparent;
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
