import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hook
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Hook e referencia em bypass para Free Fire, oferecendo atendimento 
              personalizado via Discord, suporte dedicado e maxima seguranca para nossos clientes.
            </p>
            <Button asChild size="lg" className="mt-8 gap-2">
              <a href="https://discord.com/invite/fgrB5tKFJn" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Entrar no Discord
              </a>
            </Button>
          </div>

          {/* Logo Text */}
          <div className="hidden items-center justify-center lg:flex lg:justify-end">
            <div className="relative">
              <span className="text-8xl font-bold tracking-tighter text-foreground/10">
                HOOK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
