/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EqKoUsFTWtL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from '@/components/ui/navigation-menu'

export default function NavBar() {
return (
    <>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
            <Link
                href="#" legacyBehavior passHref
            >
                <NavigationMenuLink>
                    Home
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link
                href="#" legacyBehavior passHref
            >
                <NavigationMenuLink>
                    About
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link
                href="#" legacyBehavior passHref
            >
                <NavigationMenuLink>
                    Services
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        
    </>
)
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}