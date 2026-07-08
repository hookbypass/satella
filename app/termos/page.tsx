import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const termos = [
  {
    title: "Reembolso",
    content: "O reembolso sera concedido apenas em casos em que o produto nao funcione corretamente. Nao aceitamos solicitacoes de reembolso por arrependimento, desistencia ou insatisfacao apos a ativacao ou uso do produto."
  },
  {
    title: "Reset de HWID",
    content: "Caso o cliente formate o computador ou altere componentes de hardware, sera necessario realizar o reset de HWID, o qual sera cobrado. Esse procedimento e essencial para manter a seguranca e o funcionamento adequado do produto."
  },
  {
    title: "Suporte e Instalacao",
    content: "Nossa equipe de suporte esta disponivel para auxiliar na instalacao do produto e solucionar duvidas relacionadas ao uso. O atendimento e realizado via Discord e e necessario manter o respeito e seguir as regras do servidor. O descumprimento pode resultar em bloqueio de suporte e, em casos graves, no banimento do servico."
  },
  {
    title: "Condicoes de Uso",
    content: "Ao adquirir nosso produto, voce concorda em utiliza-lo de forma etica, sem explorar falhas ou repassar acessos indevidamente. O uso incorreto ou o compartilhamento do produto podera resultar na perda de acesso sem direito a reembolso."
  },
  {
    title: "Discord e Comunicacao",
    content: "E responsabilidade do usuario manter-se atualizado atraves do nosso servidor no Discord. Informacoes sobre atualizacoes, manutencoes e mudancas nos produtos sao publicadas por la. Ignorar esses avisos nao sera considerado justificativa para reembolso ou reclamacoes futuras."
  },
  {
    title: "Alteracoes nos Termos",
    content: "Reservamo-nos o direito de alterar estes termos e condicoes a qualquer momento, visando melhorias na seguranca, usabilidade e integridade do servico."
  },
  {
    title: "Concordancia",
    content: "Ao concluir a compra, voce declara estar ciente e de acordo com todos os termos e condicoes aqui estabelecidos."
  },
]

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-foreground">Termos e Condicoes</h1>
          <p className="mt-2 text-muted-foreground">
            Leia atentamente nossos termos antes de realizar uma compra.
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {termos.map((termo, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {termo.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {termo.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
