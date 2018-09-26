import React from "react"
import {Provider} from "react-redux"

import createStore from "./src/state/createStore"
import {theme} from "./src/shared/css/theme";
import {ThemeProvider} from "styled-components";

const store = createStore()

// eslint-disable-next-line react/display-name,react/prop-types

export default ({element}) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {element}
            </ThemeProvider>
        </Provider>
    );
}