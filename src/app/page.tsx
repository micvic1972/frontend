import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <Button> <CirclePlus/> Default</Button>
      <Button variant="destructive" size="xl" className="rounded-full, text-custom-color" >
        <CirclePlus/>
        Destructive
      </Button>
      <Button variant="secondary"><CirclePlus/> Secondary</Button>
    </main>
  )
}
