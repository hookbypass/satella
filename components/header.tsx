import { BadgeCheck, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary py-2 text-center">
        <p className="text-sm font-medium text-primary-foreground">
Atendimento e vendas exclusivamente via Discord!
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Hook</span>
            <BadgeCheck className="h-5 w-5 fill-primary text-primary-foreground" />
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button asChild className="gap-2">
              <a href="https://discord.com/invite/fgrB5tKFJn" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Discord</span>
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
