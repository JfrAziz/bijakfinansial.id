import { type MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Bijak Finansial" },
    {
      name: "description",
      content: "Welcome to New Remix App with Hono backend and vite",
    },
  ]
}

export default function Index() {
  return <div>main</div>
}
