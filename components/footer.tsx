import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground">Hook</h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Bypass exclusivo para Free Fire com atendimento personalizado via Discord. 
Entrega manual e seguranca garantida.
            </p>
            <Button asChild className="mt-6 gap-2">
              <a href="https://discord.com/invite/fgrB5tKFJn" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Entrar no Discord
              </a>
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Links:</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pagina Inicial
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/fgrB5tKFJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/fgrB5tKFJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Suporte
                </a>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Termos e Condicoes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Hook. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
