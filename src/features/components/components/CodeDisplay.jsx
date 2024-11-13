import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeDisplay({ code, language = "jsx" }) {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {code}
    </SyntaxHighlighter>
  );
}
