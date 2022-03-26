import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useOnRouteChange(callback) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", callback);

    return () => router.events.off("routeChangeStart", callback);
  }, [router.events, callback]);
}
