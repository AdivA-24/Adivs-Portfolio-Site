import { useRive, Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';
import { cn } from "@/lib/utils";
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface RiveAnimationProps {
  src: string;
  artboard?: string;
  animations?: string[];
  stateMachines?: string[];
  className?: string;
  fit?: Fit;
  alignment?: Alignment;
  autoplay?: boolean;
}

export default function RiveAnimation({
  src,
  artboard,
  animations,
  stateMachines,
  className,
  fit = Fit.Cover,
  alignment = Alignment.Center,
  autoplay = true,
}: RiveAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const { RiveComponent, rive } = useRive({
    src,
    artboard,
    animations,
    stateMachines,
    layout: new Layout({
      fit,
      alignment,
    }),
    autoplay,
    onLoad: () => setIsLoaded(true),
  });

  // Example of hooking up mouse tracking if a specific state machine is used
  // This is generic, but often Rive files need specific input names like "xAxis", "yAxis", "Hover", etc.
  // We can't know them without inspecting the file, but we can try common ones or just let Rive handle it if it listens to pointer events on the canvas.
  
  return (
    <div className={cn("relative w-full h-full", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
      <RiveComponent 
        className={cn("w-full h-full transition-opacity duration-700", isLoaded ? "opacity-100" : "opacity-0")} 
        onMouseEnter={() => rive && rive.play()}
      />
    </div>
  );
}
