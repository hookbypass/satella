"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const PRODUCT_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-lq5xYJuYF4eucub01ME0DLinWcuZux.png"

const products = [
  {
    id: 1,
    name: "Pacote Privado",
    subtitle: "(Lifetime)",
    description: "O apice da seguranca. Versao desenvolvida individualmente, com exclusividade total e protecao vitalicia. Blindagem invisivel e personalizada contra qualquer ScreenShare.",
    highlight: true,
  },
  {
    id: 2,
    name: "Pacote Public",
    subtitle: "",
    description: "Solucao eficaz e otimizada para protecao contra rastros e logs. Desempenho superior e confiabilidade real, ideal para quem deseja praticidade e seguranca solida.",
    highlight: false,
  },
  {
    id: 3,
    name: "Pacote Basic",
    subtitle: "",
    description: "Plano acessivel com foco em discricao, aprovado em scanners da cena. Excelente custo-beneficio para quem busca qualidade e retorno financeiro.",
    highlight: false,
  },
  {
    id: 4,
    name: "Pacote Remote",
    subtitle: "",
    description: "Bypass e painel avancado com funcoes privadas e unicas. Protecao sem vestigios, logs ou rastros. Funciona com apenas 1 PC + 1 celular, totalmente indetectavel.",
    highlight: true,
  },
  {
    id: 5,
    name: "Hook Precision",
    subtitle: "",
    description: "Deixa sua mira muito mais precisa no Free Fire! Ajuda a manter a mira na cabeca, reduz o risco de passar do HS e da mais controle nos tiros. Bypass incluso.",
    highlight: false,
  },
  {
    id: 6,
    name: "Passador Avancado",
    subtitle: "",
    description: "Para usar xit com maxima seguranca e sem risco de W.O. Testado nos principais scanners, nao detectado por KELLER nem BREVENT. Transfere o REPLAY do emulador para Android.",
    highlight: false,
  },
  {
    id: 7,
    name: "Plano Exclusivo",
    subtitle: "(Vagas Limitadas)",
    description: "Metodo privado em fase de teste por apenas R$50. Apenas 10 vagas disponiveis! Private com chams e ESP totalmente UD. Vagas por ordem de solicitacao.",
    highlight: true,
  },
]

export function ProductsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50"
        >
          <CardContent className="p-0">
            {/* Product Image */}
            <div className="relative aspect-square bg-secondary">
              <img
                src={PRODUCT_IMAGE}
                alt={product.name}
                className="h-full w-full object-contain p-2"
              />
            </div>

            {/* Product Info */}
            <div className="p-3">
              <div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {product.name}
                  {product.subtitle && (
                    <span className="ml-1 font-normal text-muted-foreground">
                      {product.subtitle}
                    </span>
                  )}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
              </div>

              {/* Price Info */}
              <p className="mt-2 text-xs text-primary">Consulte o valor no Discord</p>

              {/* CTA Button */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="mt-3 w-full gap-1.5 text-xs"
              >
                <a href="https://discord.com/invite/fgrB5tKFJn" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Consultar via Discord
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
