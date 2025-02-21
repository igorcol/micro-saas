// Executado toda vez que uma página é renderizada

import { getURL } from "next/dist/shared/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('authjs.session-token')
    const pathname = request.nextUrl.pathname

    // console.log({
    //     token: token?.value,
    //     pathname
    // })

    // Se estiver no /auth mas já estiver logado => vai para /App
    if (pathname === '/auth' && token) {
        return NextResponse.redirect(new URL(getUrl('/App')))
    }

    // Se estiver no /App mas NÃO estiver logado => vai para /auth
    if (pathname.includes('/App') && !token) {
        return NextResponse.redirect(new URL(getUrl('/auth')))
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}