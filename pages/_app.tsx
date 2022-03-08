import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { UserContextProvider } from "../components/context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      classes={{
        variantSuccess: "snackbar-sans",
        variantError: "snackbar-sans",
        variantInfo: "snackbar-sans",
        variantWarning: "snackbar-sans",
      }}
      preventDuplicate={true}
    >
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
