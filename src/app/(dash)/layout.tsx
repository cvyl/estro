
import MenuBar from '@/components/_app/menubar';
import redirect from 'next/navigation';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"
  import type { Metadata } from "next";
  import { Inter as FontSans } from "next/font/google";
  import { cn } from '@/lib/utils';
  import { ThemeProvider } from '@/components/theme-provider';
  import "../globals.css";
  
  const fontSans = FontSans({ subsets: 
    ["latin"],
    variable: '--font-sans',
  });

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        
        <MenuBar />
        <ContextMenu>
        
        <ContextMenuTrigger>
            



            <ContextMenuContent>
            <ContextMenuSeparator />
            <ContextMenuLabel>Text size</ContextMenuLabel>
            <ContextMenuRadioGroup value="medium">
                <ContextMenuRadioItem value="small">Small</ContextMenuRadioItem>
                <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
                <ContextMenuRadioItem value="large">Large</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuLabel>Options</ContextMenuLabel>
            <ContextMenuCheckboxItem>
                Option 1
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>
                Option 2
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
                <ContextMenuSubTrigger inset>
                    More Tools
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className='w48'>
                    <ContextMenuItem>Sub Item 1</ContextMenuItem>
                    <ContextMenuItem>Sub Item 2</ContextMenuItem>
                    <ContextMenuItem>Sub Item 3</ContextMenuItem>
                </ContextMenuSubContent>
            </ContextMenuSub>
            </ContextMenuContent>
            <main className="
            
            h-screen flex flex-col p-4 relative theme-custom">
            
            {children}
            
        </main>
        </ContextMenuTrigger>
        </ContextMenu>

        </>
    );
}