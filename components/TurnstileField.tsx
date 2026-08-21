"use client";

import dynamic from "next/dynamic";
import { forwardRef, useEffect, useRef, useState } from "react";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

const Turnstile = dynamic(
  () => import("@marsidev/react-turnstile").then((mod) => mod.Turnstile),
  { ssr: false },
);

type TurnstileFieldProps = {
  siteKey: string;
  onSuccess: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

/** Loads Turnstile only when the contact area enters the viewport. */
export const TurnstileField = forwardRef<TurnstileInstance, TurnstileFieldProps>(
  function TurnstileField(
    { siteKey, onSuccess, onExpire, onError },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
      const node = containerRef.current;
      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" },
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    return (
      <div ref={containerRef}>
        {shouldLoad ? (
          <Turnstile
            ref={ref}
            siteKey={siteKey}
            options={{
              action: "contact",
              theme: "light",
              language: "en",
            }}
            onSuccess={onSuccess}
            onExpire={onExpire}
            onError={onError}
          />
        ) : null}
      </div>
    );
  },
);
