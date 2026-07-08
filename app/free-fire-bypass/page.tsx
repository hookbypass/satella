import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products-grid"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FreeFireBypassPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar</span>
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Satella Free Fire Bypass</h1>
          <p className="mt-2 text-muted-foreground">
            Confira nossos produtos - valores e disponibilidade via Discord
          </p>
        </div>

        {/* Products Grid */}
        <ProductsGrid />
      </section>

      <Footer />
    </main>
  )
}
