import fs from "fs"
import { Button } from "~/components/ui/button"
import { useLoaderData } from "@remix-run/react"
import { MetaFunction, json } from "@remix-run/node"

interface LoanPlatform {
  name: string
  website: string
  company: string
  ojk_authority: string
  registration_certificate: string
  registration_date: string
  type: string
  platform: string
  interest_rate: number
  interest_time: string
  provision_rate: number
  tenor_min: number
  tenor_max: number
  loan_min: string
  loan_max: string
  late_fee_rate: number
  Kode: number
}

export const meta: MetaFunction = () => {
  return [
    { title: "Try | Bijak Finansial" },
    {
      name: "description",
      content: "Bijak finansial",
    },
  ]
}

export const loader = async () => {
  const loans = JSON.parse(
    fs.readFileSync("./app/data/online_loan.json") as unknown as string
  ) as LoanPlatform[]

  return json({ loans: loans })
}

export default function Try() {
  const { loans } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        {loans.map((i, idx) => (
          <div key={idx} className="flex flex-col gap-2 rounded-md border">
            <div className="flex aspect-video w-full justify-center rounded-t-md bg-primary/80 font-bold font-mono text-4xl text-primary-foreground uppercase">
              <div className="flex h-full w-full items-center justify-center text-center">
                {i.name}
              </div>
            </div>
            <div className="px-2 pb-4">
              <div className="text flex items-center justify-between">
                <div className="line-clamp-1 font-semibold">{i.company}</div>
                <Button size="sm" variant="outline" className="h-7" asChild>
                  <a href={i.website} target="_blank">
                    website
                  </a>
                </Button>
              </div>
              <div>
                <div className="text-xs">
                  Bunga {i.interest_rate}% / {i.interest_time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
