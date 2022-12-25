import "./tailwind.css";
import { ThemeProvider } from "@tkeiyama/react-theme";

export const decorators = [
  (Story) => (
    <StoryRoot>
      {Story()}
    </StoryRoot>
  ),
];

export const StoryRoot = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
