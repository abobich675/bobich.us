"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAnimation } from './AnimationContext';
import { useEffect, useState } from 'react';

type AnimatedLinkProps = {
    href: string;
    target?: string;
    children?: React.ReactNode;
  };

const AnimatedLink = ({ href, target, children}: AnimatedLinkProps) => {
    const router = useRouter();
    const [animationState, setAnimationState] = useAnimation();
    const [clicked, setClicked] = useState(0);

    // Start animation
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) =>  {
        e.preventDefault();
        setAnimationState(1);
        setClicked(1);
    }

    // Route to new page when animation is complete
    useEffect(() => {
        if (animationState == 2 && clicked) {
            setClicked(0);
            router.push(href);
        }
    }, [animationState]);

    if (target)
        return (
            <Link href={href} target={target}>
                {children}
            </Link>
        )
    else 
        return (
            <Link href={href} onClick={handleClick}>
                {children}
            </Link>
        )
};

export default AnimatedLink;
