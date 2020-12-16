import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

const GlobalStyle = createGlobalStyle`
body{
    background: ${themes.light.backgroundColor};

    @media (prefers-color-scheme: dark) {
	background: ${themes.dark.backgroundColor};
    }
}
`
export default GlobalStyle
