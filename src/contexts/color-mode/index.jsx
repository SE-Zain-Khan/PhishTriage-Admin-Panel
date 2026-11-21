
import { createContext, useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { RefineThemes } from "@refinedev/antd";

export const ColorModeContext = createContext({
  mode: "light",
  setMode: () => {},
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("colorMode");

    if (savedMode) {
      return savedMode;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)" 
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((currentMode) =>
      currentMode === "light" ? "dark" : "light"
    );
  };

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        setMode: toggleColorMode,
      }}
    >
      <ConfigProvider
        theme={{
          ...RefineThemes.Blue,
          algorithm:
            mode === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
