import { ThemeProvider } from "@tkeiyama/react-theme";
import type { AppProps } from "next/app";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
