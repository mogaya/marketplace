import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/constants";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { CanceledError } from "axios";
import { api } from "@/services/api-client";

interface DecodedToken {
  exp: number;
}

const useAuthorized = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    const decoded: DecodedToken = jwtDecode(token);
    const tokenExp = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExp < now) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (!refreshToken) {
        setIsAuthorized(false);
        return;
      }

      api
        .post("/token/refresh/", { refresh: refreshToken }, { signal })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
          }
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          console.error("Token Refresh Failed", err);
          setIsAuthorized(false);
        });
    } else {
      setIsAuthorized(true);
    }

    return () => controller.abort();
  }, []);

  return { isAuthorized, setIsAuthorized };
};

export default useAuthorized;
