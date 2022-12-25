"use client";

import { useTheme } from "@tkeiyama/react-theme";

export default function Page() {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    changeTheme();
  };

  return (
    <div className="w-screen h-screen text-black dark:text-white bg-white dark:bg-black">
      <h1>app - {theme}</h1>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}
