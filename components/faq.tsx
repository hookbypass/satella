import { HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a compra?",
    answer:
      "Todo o processo e feito via Discord. Abra um ticket no nosso servidor, informe o produto desejado e nossa equipe ira te atender.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "A entrega e feita manualmente pela nossa equipe apos a confirmacao do pagamento via ticket no Discord.",
  },
  {
    question: "Quais formas de pagamento sao aceitas?",
    answer:
      "Os metodos de pagamento sao informados via ticket no Discord. Entre em contato para saber as opcoes disponiveis.",
  },
  {
    question: "Onde vejo os precos?",
    answer:
      "Os valores sao consultados diretamente no Discord. Abra um ticket para receber informacoes sobre precos e disponibilidade.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Nosso suporte e feito atraves do Discord. Abra um ticket e nossa equipe ira te atender o mais rapido possivel.",
  },
  {
    question: "Os produtos sao seguros?",
    answer:
      "Trabalhamos com metodos seguros e testados. Nossa equipe oferece suporte completo para garantir sua seguranca.",
  },
]

export function FAQ() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4 gap-2">
            <HelpCircle className="h-3 w-3" />
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tire suas duvidas sobre nossos produtos e servicos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
