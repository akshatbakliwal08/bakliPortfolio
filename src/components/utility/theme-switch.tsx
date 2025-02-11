import { Dispatch, SetStateAction, useEffect } from "react";
import { useTheme } from "next-themes";

export interface ThemeSwitchProps {
  setClose?: Dispatch<SetStateAction<boolean>>;
}

export default function ThemeSwitch() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark"); // Set the theme to dark upon component mount
  }, [setTheme]);
}
