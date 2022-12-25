import { useTheme } from "@tkeiyama/react-theme";

export const Index = () => {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    changeTheme();
  };

  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <h1>{theme}</h1>
      <button type="button" onClick={handleTheme}>Change Theme</button>
    </div>
  );
};
