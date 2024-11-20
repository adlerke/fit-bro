import { ThemeProvider } from "styled-components";
import React, { createContext, PropsWithChildren, useContext } from "react";

import { ThemeProps, ThemeType } from "./types";

import DefaultTheme from "./defaultTheme";

export const themes = {
    default: DefaultTheme,
};

const Context = createContext<Required<ThemeType>>(DefaultTheme);

export const useTheme = (): Required<ThemeType> => useContext(Context);

export const Theme: React.FC<PropsWithChildren<ThemeProps>> = ({
    children,
    theme,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Context.Provider value={theme}>{children}</Context.Provider>
        </ThemeProvider>
    );
};
