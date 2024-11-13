import styled from "styled-components"

export function CardContentCod(){
    return(
        <Content>
        <h2>My Custom Button Component</h2>
        <CodeDisplay code={exampleCode} language="jsx" />
      </Content>
    )
}
const Content = styled.div`
    

`;