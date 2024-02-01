import React, { createContext, useContext, useState, useEffect, SetStateAction, Dispatch } from "react";

//TODO: Apply LoadingContext correctly

type ContextT = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<ContextT>({
  loading: false,
  setLoading: () => { }
});

interface LoadingProviderProps {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const { loading, setLoading } = useContext(LoadingContext);
  return {
    loading,
    setLoading
  };
}

export function useLoadingEffect(loading: boolean) {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(loading);
  });
}

export function Loading() {
  const { loading } = useContext(LoadingContext);

  return (
    loading ? (
      <div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#e2e8f0",
            opacity: 0.75
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="loading" />
        </div>
      </div>
    ) : <></>
  );
}