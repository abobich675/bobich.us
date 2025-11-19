"use client"
import {GlassCard} from '@developer-hub/liquid-glass'
import { Button } from './ui/button';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';


export default function PortfolioDropdown({
  value = "ALL PROJECTS",
}: {
  value?: "ALL PROJECTS" | "WEBSITES" | "GAMES" | "VISUALIZATIONS";
}) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className="focus:ring-white/0">
            <Button variant={"ghost"} className="my-5 flex hover:bg-white/3">
                {value}
                <ChevronDown className="scale-75" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-none" align="start">
            <GlassCard className="border border-white/20">
                <Link href="/Portfolio">
                    <DropdownMenuItem className="hover:bg-white/10 px-2 py-1 focus:outline-none focus:ring-0 focus:border-0">
                        ALL PROJECTS
                    </DropdownMenuItem>
                </Link>
                <Link href="/Web-Development">
                    <DropdownMenuItem className="hover:bg-white/10 px-2 py-1 focus:outline-none focus:ring-0 focus:border-0">
                        WEBSITES
                    </DropdownMenuItem>
                </Link>
                <Link href="/Game-Development">
                    <DropdownMenuItem className="hover:bg-white/10 px-2 py-1 focus:outline-none focus:ring-0 focus:border-0">
                        GAMES
                    </DropdownMenuItem>
                </Link>
                <Link href="/Visualizations">
                    <DropdownMenuItem className="hover:bg-white/10 px-2 py-1 focus:outline-none focus:ring-0 focus:border-0">
                        VISUALIZATIONS
                    </DropdownMenuItem>
                </Link>
            </GlassCard>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};