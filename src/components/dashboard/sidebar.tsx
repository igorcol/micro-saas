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
        <aside className={cn([''], className)} >
            {children}
        </aside>
    )
}

export function SidebarHeader({ children, className} : SidebarGeneriProps) {
    return (
        <header className={cn([''], className)} >
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
        <main className={cn([''], className)} >
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
        <h4 className={cn([''], className)} >
            {children}
        </h4>
    )
}

export function SidebarNavMain({ children, className} : SidebarGeneriProps) {
    return (
        <main className={cn([''], className)} >
            {children}
        </main>
    )
}

type SidebarNavLinkProps = {
    href: string
}

export function SidebarNavLink({ children, className, href} : SidebarGeneriProps<SidebarNavLinkProps>) {
    return (
        <Link href={href} className={cn([''], className)} >
            {children}
        </Link>
    )
}

export function SidebarFooter({ children, className} : SidebarGeneriProps) {
    return (
        <footer className={cn([''], className)} >
            {children}
        </footer>
    )
}
