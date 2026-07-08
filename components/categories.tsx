import { ArrowRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function Categories() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 flex items-center gap-2">
          <Menu className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Nossa categoria</span>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6">
          <Link href="/free-fire-bypass">
            <Card
              className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50"
            >
              <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row">
                {/* Image */}
                <div
                  className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-secondary"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-TKZCN9Cdxyg0JVxta4vc1WRkYMwmnm.png"
                    alt="Hook Free Fire Bypass"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-card-foreground">Hook Free Fire Bypass</h3>
                  <p className="mt-2 text-muted-foreground">
                    Bypass exclusivo para Free Fire. Veja todos os nossos produtos.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-fit gap-2 self-center sm:self-start"
                  >
                    Ver produtos
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
