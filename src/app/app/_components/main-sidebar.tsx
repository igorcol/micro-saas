'use client'
import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarHeaderTitle,
    SidebarMain,
    SidebarNav,
    SidebarNavHeader,
    SidebarNavHeaderTitle,
    SidebarNavLink,
    SidebarNavMain,
  } from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon} from '@radix-ui/react-icons'
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";

export function MainSidebar() {

    const pathName = usePathname()

    const isActive = (path: string) => {
        return pathName === path
    }

    return (
        <Sidebar>
        <SidebarHeader>
          <Logo/>
        </SidebarHeader>
        <SidebarMain className="flex flex-col flex-grow">
          <SidebarNav>
            <SidebarNavMain>
              <SidebarNavLink href="/App" active={isActive('/App')}>
                <HomeIcon className="w-3 h-3 mr-3" /> 
                Tarefas
              </SidebarNavLink>
              <SidebarNavLink href="/App/settings" active={isActive('/App/settings')}>
                <MixerVerticalIcon className="w-3 h-3 mr-3" /> 
                Configurações
              </SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>

          <SidebarNav className="mt-auto">
            <SidebarNavHeader>
                <SidebarNavHeaderTitle>
                    Links Extras
                </SidebarNavHeaderTitle>
            </SidebarNavHeader>
            <SidebarNavMain>
              <SidebarNavLink href="/">Precisa de Ajuda?</SidebarNavLink>
              <SidebarNavLink href="/">Site</SidebarNavLink>
            </SidebarNavMain>
          </SidebarNav>
        </SidebarMain>

        <SidebarFooter>
            <UserDropdown/>
        </SidebarFooter>
      </Sidebar>
    )
}