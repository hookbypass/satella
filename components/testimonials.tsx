import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "Rafael Gomes",
    initials: "RG",
    review:
      "Produto top demais! Funcionou de primeira e o suporte me ajudou em tudo. Recomendo muito.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bruno Alves",
    initials: "BA",
    review:
      "Ja comprei 3 vezes e nunca tive problema. Entrega rapida e atendimento nota 10.",
    rating: 5,
  },
  {
    id: 3,
    name: "Felipe Santos",
    initials: "FS",
    review:
      "Melhor loja que encontrei. Preco justo e produto funcionando perfeitamente.",
    rating: 5,
  },
  {
    id: 4,
    name: "Gustavo Lima",
    initials: "GL",
    review:
      "Atendimento muito rapido pelo Discord. Tirou todas as minhas duvidas antes de comprar.",
    rating: 5,
  },
  {
    id: 5,
    name: "Matheus Costa",
    initials: "MC",
    review:
      "Comprei e recebi em poucos minutos. Produto de qualidade e seguro. Voltarei a comprar!",
    rating: 5,
  },
  {
    id: 6,
    name: "Diego Ferreira",
    initials: "DF",
    review:
      "Confiei e deu certo! Produto excelente e a equipe muito atenciosa. Super indico.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 gap-2">
            <Star className="h-3 w-3 fill-primary text-primary" />
            Avaliações
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-3 text-muted-foreground">
            Veja o feedback de quem já comprou com a gente.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-border bg-card transition-all hover:border-primary/30"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                    {testimonial.initials}
                  </div>
                  <span className="font-medium text-card-foreground">
                    {testimonial.name}
                  </span>
                </div>

                {/* Review */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  &quot;{testimonial.review}&quot;
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
