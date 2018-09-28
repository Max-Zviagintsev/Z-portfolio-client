import React from "react"

import {theme} from "./src/shared/css/theme";
import {ThemeProvider} from "styled-components";

// eslint-disable-next-line react/display-name,react/prop-types

export default ({element}) => {
    return (
            <ThemeProvider theme={theme}>
                {element}
            </ThemeProvider>
    );
}