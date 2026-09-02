"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, Suspense, useContext, useEffect, useState } from "react";

export const AnimationContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>] | undefined>(undefined);

export const AnimationContextProviderClient = ({ children }: { children: React.ReactNode }) =>{
    const [animationState, setAnimationState] = useState(0);
    const pathname = usePathname();
    const searchParams = useSearchParams()

    // On page load, play receding animation
    useEffect(() => {
      if (animationState == 2) {
        setAnimationState(3);
      }
    }, [pathname, searchParams]);

    return(
      <AnimationContext.Provider value={[animationState, setAnimationState]}>
        {children}
      </AnimationContext.Provider>
    )
}

export const AnimationContextProvider = ({ children }: { children: React.ReactNode })=>{
  return(
      <Suspense>
        <AnimationContextProviderClient> {children} </AnimationContextProviderClient>
      </Suspense>
    )
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationContextProvider");
  }
  return context;
}