import tailwind from "~/styles/globals.css?url"
import { Button } from "./components/ui/button"
import { LinksFunction } from "@remix-run/server-runtime"
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="w-full gap-8 border-b px-4 py-2">
          <div className="container m-auto flex items-center justify-between">
            <div>
              <div className="font-bold text-xl">Bijak Finansial</div>
            </div>
            <div>
              <Button size="sm" asChild>
                <Link to="/try">Try It Now</Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="container m-auto py-2">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
