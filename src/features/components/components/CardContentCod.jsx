import styled from "styled-components";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IoClipboardOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";


export function CardContentCod({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Mensaje temporal
  };
  return (
    <Content>
      <p>{item.language}</p>
      <button onClick={() => handleCopy(item.code)}>
        {copied ? <FaCheck /> : <IoClipboardOutline />}
      </button>
      <Icon color={item.color}>{item.icon}</Icon>
      <Code>
        <SyntaxHighlighter
          language={item.language}
          style={atomDark}
          className="code"
        >
          {item.code}
        </SyntaxHighlighter>
      </Code>

      {/* <CodeDisplay code={exampleCode} language="jsx" /> */}
    </Content>
  );
}
const Content = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  p {
    position: absolute;
    margin: 5px;
    text-transform: uppercase;
    user-select: none;

  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    display:flex;
    width: 22px;
    height: 22px;
    cursor: pointer;
    align-items:center;
    justify-content:center;
    background-color: #404040;
    color:white;
    border-color:transparent;
    border-radius: 5px;
  }
`;
const Code = styled.div`
  width: 300px;
  height: 300px;
  font-size: 10px;
  overflow: auto;
  border-radius: 10px;
`;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
left: 5px;
  bottom: 0px;
  color: ${(props)=>props.color}
`;