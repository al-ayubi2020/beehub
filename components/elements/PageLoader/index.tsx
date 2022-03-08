import React, { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useUserContext } from "../../context/UserContext";

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  const [dots, setDots] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const addDots = useCallback(() => {
    if (dots.length < 3) setDots(dots + ".");
    else setDots("");
  }, [dots]);

  useEffect(() => {
    const interval = setInterval(addDots, 500);
    return () => clearInterval(interval);
  }, [addDots]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) setShowMessage(false);
  }, [loading]);

  return (
    <div
      className="
        min-h-screen min-w-screen 
        w-full h-full 
        flex flex-col items-center justify-center  space-y-4 
        bg-black-900 text-lemon select-none px-8 md:px-0
      "
    >
      <CircularProgress color="inherit" />
      <div className="text-center space-y-2">
        <p>Loading your PERAK experience{dots}</p>
        {showMessage && (
          <p>
            TIP: Silahkan restart browser apabila konten tidak kunjung tampil.
          </p>
        )}
      </div>
    </div>
  );
};

export const PageLoader: React.FC = ({ children }) => {
  const { loading } = useUserContext();
  return !loading ? <>{children}</> : <Loader loading={loading} />;
};