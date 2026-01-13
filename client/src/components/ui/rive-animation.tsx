import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { cn } from "@/lib/utils";
import { useState } from 'react';
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

  const { RiveComponent } = useRive({
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

  return (
    <div className={cn("relative w-full h-full", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
      )}
      <RiveComponent className={cn("w-full h-full transition-opacity duration-700", isLoaded ? "opacity-100" : "opacity-0")} />
    </div>
  );
}
