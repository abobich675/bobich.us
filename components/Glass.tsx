import {GlassCard} from '@developer-hub/liquid-glass'
import { useEffect, useState } from 'react';

type GlassProps = {
    children: React.ReactNode;
    displacementScale?: number;
    blurAmount?: number;
    cornerRadius?: number;
    mouseOffset?: {
        x: number;
        y: number;
    };
    mouseContainer?: React.RefObject<HTMLElement | null> | null;
    className?: string;
    padding?: string;
    style?: React.CSSProperties;
    shadowMode?: boolean;
    onClick?: () => void;
    fallbackBlurMultiplier?: number;
};

const FallbackGlass = ({ children, blurAmount, cornerRadius, className, padding, style, onClick }: GlassProps) => {
    return (
    <div
      className={className}
      style={{
        backdropFilter: `blur(${blurAmount ?? 10}px)`,
        borderRadius: cornerRadius,
        padding,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
    )
}

const Glass = (props: GlassProps) => {
    const [mounted, setMounted] = useState(false);
    const [supportsRefraction, setSupportsRefraction] = useState(false);

    useEffect(() => {
        const isChromium = !!(window as Window & { chrome?: unknown }).chrome;
        setSupportsRefraction(isChromium);
        setMounted(true);
    }, []);

    const {
        blurAmount = 0.01,
        displacementScale = 100,
        cornerRadius = 10,
        fallbackBlurMultiplier = 500,
        ...rest
    } = props;

    if (!mounted) return <FallbackGlass blurAmount={blurAmount * fallbackBlurMultiplier} cornerRadius={cornerRadius} {...rest} />;
    if (supportsRefraction)
        return <GlassCard blurAmount={blurAmount} cornerRadius={cornerRadius} {...rest} />
    else
        return <FallbackGlass blurAmount={blurAmount * fallbackBlurMultiplier} cornerRadius={cornerRadius} {...rest}/>
}
    
export default Glass;