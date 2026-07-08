import { MessageCircle, Headphones, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MessageCircle,
    title: "Atendimento via Discord",
    description:
      "Todo o processo de compra e entrega e realizado manualmente via ticket no Discord.",
  },
  {
    icon: Headphones,
    title: "Suporte dedicado",
    description:
      "Em caso de duvidas, abra um ticket no nosso Discord para atendimento personalizado.",
  },
  {
    icon: Shield,
    title: "Seguranca garantida",
    description:
      "Trabalhamos com metodos seguros e sigilosos para proteger sua conta e seus dados.",
  },
]

export function Features() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-card text-center transition-all hover:border-primary/30"
            >
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
