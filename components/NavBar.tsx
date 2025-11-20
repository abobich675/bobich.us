"use client"
import {GlassCard} from '@developer-hub/liquid-glass'
import { ButtonGroup } from './ui/button-group';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='fixed left-1/2 transform -translate-x-1/2 translate-y-2/2 z-15'>
        <GlassCard>
            <ButtonGroup className='border border-white/20 rounded-full'>
                <Link href="/">
                    <Button className='hover:bg-white/10 rounded-l-full rounded-r-none'>
                        <span className='w-3 h-3'><Image src="/icons/home.png" alt='home' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></span>
                        Home
                    </Button>
                </Link>
                <Link href="/Portfolio">
                    <Button className='hover:bg-white/10 rounded-none'>
                        <span className='w-4 h-4'><Image src="/icons/blueprint.png" alt='portfolio' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></span>
                        Portfolio
                    </Button>
                </Link>
                <Link href="/Resume">
                    <Button className='hover:bg-white/10 rounded-none'>
                        <span className='w-4 h-4'><Image src="/icons/resume.png" alt='resume' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></span>
                        Resume
                    </Button>
                </Link>
                <Link href="mailto:abobich675@gmail.com">
                    <Button className='hover:bg-white/10 rounded-l-none rounded-r-full'>
                        <span className='w-4 h-4'><Image src="/icons/email.png" alt='contact me' width={100} height={100} className='w-full h-full object-contain filter brightness-0 invert' /></span>
                        Contact Me
                    </Button>
                </Link>
            </ButtonGroup>
        </GlassCard>
    </div>
  );
};

export default NavBar;
