/*

type SidebarProps = {
    paths: Array<{
        label: string,
        href: string
    }>
}

export default function Sidebar({ paths } : SidebarProps) {
    return (
        <aside className="border-r border-border">
            <nav>
                {paths.map(path => (
                    <a href={path.href} key={path.href}>{path.label}</a>
                ))}
            </nav>
        </aside>
    )
}
*/

// * ESTRUTURA SEGUINDO COMPOSITION PATTERN

import { cn } from "@/lib/utils"
import Link from "next/link"

export type SidebarGeneriProps<T = any> = {
    children: React.ReactNode
    className?: string
} & T


export function Sidebar({ children, className} : SidebarGeneriProps) {
    return (
        <aside className={cn(['border-r border-border flex flex-col space-y-6'], className)} >
            {children}
        </aside>
    )
}

export function SidebarHeader({ children, className} : SidebarGeneriProps) {
    return (
        <header className={cn(['px-6'], className)} >
            {children}
        </header>
    )
}

export function SidebarHeaderTitle({ children, className} : SidebarGeneriProps) {
    return (
        <h2 className={cn([''], className)} >
            {children}
        </h2>
    )
}

export function SidebarMain({ children, className} : SidebarGeneriProps) {
    return (
        <main className={cn(['px-3'], className)} >
            {children}
        </main>
    )
}

export function SidebarNav({ children, className} : SidebarGeneriProps) {
    return (
        <nav className={cn([''], className)} >
            {children}
        </nav>
    )
}

export function SidebarNavHeader({ children, className} : SidebarGeneriProps) {
    return (
        <header className={cn([''], className)} >
            {children}
        </header>
    )
}

export function SidebarNavHeaderTitle({ children, className} : SidebarGeneriProps) {
    return (
        <div className={cn(['text-xs uppercase text-muted-foreground ml-3'], className)} >
            {children}
        </div>
    )
}

export function SidebarNavMain({ children, className} : SidebarGeneriProps) {
    return (
        <main className={cn(['flex flex-col'], className)} >
            {children}
        </main>
    )
}

type SidebarNavLinkProps = {
    href: string
    active?: boolean
}

export function SidebarNavLink({ children, className, href, active} : SidebarGeneriProps<SidebarNavLinkProps>) {
    return (
        <Link href={href} className={cn(
            ['flex items-center text-sm px-3 py-2 rounded-md'], 
            active && 'bg-secondary',
            className)
        } >
            {children}
        </Link>
    )
}

export function SidebarFooter({ children, className} : SidebarGeneriProps) {
    return (
        <footer className={cn(['p-6 mt-auto border-t border-border'], className)} >
            {children}
        </footer>
    )
}
