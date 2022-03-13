import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { UserContextProvider } from "../components/context/UserContext";
import NavbarContainer from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import Modal from "../components/elements/Modal";
import ModalAdmin from "../components/elements/AdminModal";

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
        <Modal>
          <ModalAdmin>
            <NavbarContainer />
            <Component {...pageProps} />
            <Footer />
          </ModalAdmin>
        </Modal>
      </UserContextProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
