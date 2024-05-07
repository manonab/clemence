import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AnimationContextType {
  animationSeen: boolean;
  markAnimationSeen: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("It must be used within a AnimationProvider");
  }
  return context;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationSeen, setAnimationSeen] = useState<boolean>(false);

  const markAnimationSeen = () => {
    setAnimationSeen(true);
  };

  const animationContextValue: AnimationContextType = {
    animationSeen,
    markAnimationSeen,
  };

  return (
    <AnimationContext.Provider value={animationContextValue}>
      {children}
    </AnimationContext.Provider>
  );
};
