import { Heart, Eye, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-200">
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        {/* Ícones posicionados mais próximos ao centro */}
        <div className="absolute left-8 top-8 md:left-12 md:top-12">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute right-8 top-8 md:right-12 md:top-12">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-12">
          <Eye className="w-8 h-8" />
        </div>

        {/* Conteúdo centralizado com largura máxima maior */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Uncover the "Fan Truths"
            <br />
            That Set Your Brand
            <br />
            Apart
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Digital Fans has developed a cutting-edge methodology
            that combines field research, social media analysis,
            and AI to help you uncover what your customers truly
            love about your brand—the unique elements that only
            you can offer.
          </p>
        </div>
      </section>
    </main>
  )
} 