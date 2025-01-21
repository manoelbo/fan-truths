import { Button } from "@/components/ui/button"
import {
  Heart,
  Star,
  Cloud,
  Users,
  Eye,
  Globe,
  Lightbulb,
  CreditCard,
  Book,
  Users2,
  PresentationIcon,
  PhoneCall,
} from "lucide-react"

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <WhatAreFanTruths />
      <OurProcess />
      <WhatYoullGet />
      <CTASection />
    </main>
  )
}

function HeroSection() {
  return (
    <section className="relative bg-[#C4B5FD] min-h-[90vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-black flex items-center justify-center">
            <Heart className="w-12 h-12 text-pink-400" />
          </div>
        </div>
        <div className="absolute top-40 right-20">
          <div className="w-32 h-32 rounded-full bg-white border-4 border-black flex items-center justify-center">
            <Star className="w-16 h-16 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-20 left-1/4">
          <div className="w-28 h-28 rounded-full bg-white border-4 border-black flex items-center justify-center">
            <Eye className="w-14 h-14 text-blue-300" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Uncover the "Fan Truths" That Set Your Brand Apart
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Digital Fans has developed a cutting-edge methodology that combines field research, social media analysis, and AI to help you uncover what your customers truly love about your brand—the unique elements that only you can offer.
          </p>
    
        </div>
      </div>
    </section>
  )
}

function WhatAreFanTruths() {
  return (
    <section className="bg-[#FFE4E1] py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border-4 border-black rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">What Are Fan Truths?</h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              Fan Truths are the genuine reasons your most loyal customers choose and celebrate your brand. They're the
              little details, emotional connections, or tangible benefits that only you deliver.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Product Design & CX */}
          <div
            className="bg-[#C4B5FD] border-4 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          transform transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-black pb-2">Product Design & CX</h3>
            <p className="text-gray-800">
              Know exactly what your fans love and focus on the details that truly matter. This ensures you're always
              enhancing the customer experience with the elements they value most.
            </p>
          </div>

          {/* Value Proposition */}
          <div
            className="bg-[#FECACA] border-4 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          transform transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-black pb-2">Value Proposition</h3>
            <p className="text-gray-800">
              Gain a clear understanding of not just the value you offer to customers, but how to effectively showcase
              it to your partners. Align everyone around the true essence of your brand.
            </p>
          </div>

          {/* Community Marketing */}
          <div
            className="bg-[#A7F3D0] border-4 border-black rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          transform transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-black pb-2">Community Marketing</h3>
            <p className="text-gray-800">
              Create content that speaks authentically about your brand's unique value, fostering a stronger connection
              with your community through genuine storytelling and engagement.
            </p>
          </div>
        </div>

        {/* Call to Action */}
      </div>
    </section>
  )
}

function OurProcess() {
  return (
    <section className="bg-[#FFDAB9] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Our Process</h2>

        <div className="space-y-12">
          {/* Immersion */}
          <ProcessStep
            icon={<Users className="w-12 h-12" />}
            title="Immersion"
            description="We start by interviewing key members within your company to gain a deep, ethnographic understanding of your brand. By immersing ourselves in your internal culture and values, we uncover the foundational insights that guide our entire research process."
            color="bg-[#FFB6C1]"
          />

          {/* Interviews & Observation */}
          <ProcessStep
            icon={<Eye className="w-12 h-12" />}
            title="Interviews & Observation"
            description="Next, we engage directly with your customers through in-depth interviews and participant observation. This anthropological lens allows us to capture authentic experiences and emotional drivers—what truly resonates with your fans."
            color="bg-[#98FB98]"
          />

          {/* Digital Analysis */}
          <ProcessStep
            icon={<Globe className="w-12 h-12" />}
            title="Digital Analysis"
            description="We then conduct a netnographic exploration of comments, reviews, and social media activity. By mapping online conversations, we identify trends, sentiment, and real-time feedback, creating a holistic view of your digital community."
            color="bg-[#87CEFA]"
          />

          {/* Synthesis & Curation */}
          <ProcessStep
            icon={<Lightbulb className="w-12 h-12" />}
            title="Synthesis & Curation"
            description="Finally, we converge all insights into concise Fan Truths. Through rigorous analysis and cross-validation, we curate the most impactful themes—revealing the genuine reasons your fans connect with your brand. These Fan Truths guide product development, marketing, and community engagement strategies moving forward."
            color="bg-[#DDA0DD]"
          />
        </div>

        {/* Call to Action */}
      </div>
    </section>
  )
}

function ProcessStep({ icon, title, description, color }) {
  return (
    <div className="flex items-start space-x-6">
      <div className={`${color} p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
        <p className="text-lg text-gray-800">{description}</p>
      </div>
    </div>
  )
}

function WhatYoullGet() {
  return (
    <section className="bg-[#E6E6FA] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          What You'll Get From This Journey
        </h2>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-12 text-center">
          We're here to deliver more than just insights—we'll equip you with tangible tools and actionable strategies to
          leverage your Fan Truths effectively.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <JourneyCard
            icon={<CreditCard className="w-12 h-12" />}
            title="Fan Truth Cards"
            description="A curated list of insights presented as beautifully designed cards—both physical and digital. Each card includes an illustration and a clear definition of the Fan Truths we uncovered, making it easy for your team to reference and apply them."
            color="bg-[#FFD700]"
          />
          <JourneyCard
            icon={<Book className="w-12 h-12" />}
            title="Actionable Playbook"
            description="A comprehensive guide on how to use the Fan Truths in your strategy. It includes practical recommendations and opportunities we identified during our analysis, ensuring you have a clear path forward."
            color="bg-[#98FB98]"
          />
          <JourneyCard
            icon={<Users2 className="w-12 h-12" />}
            title="Hands-On Workshop (Optional)"
            description="We'll bring your team together in an interactive workshop to put the Fan Truth Cards and Playbook into action. Together, we'll brainstorm ideas, create actionable plans, and start shaping the future of your brand."
            color="bg-[#FF69B4]"
          />
        </div>

        {/* Call to Action */}

      </div>
    </section>
  )
}

function JourneyCard({ icon, title, description, color }) {
  return (
    <div
      className={`${color} border-4 border-black rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                    transform transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="bg-white rounded-full p-4 inline-block border-4 border-black mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  )
}

function CTASection() {
  return (
    <section className="bg-[#FFF5EE] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <CTACard
            title="I Want a Demo"
            description="In just 2 weeks, we'll analyze your brand and deliver 3 personalized Fan Truths to show you the value of our methodology."
            color="bg-white"
          />
          <div className="text-4xl font-bold text-black">or</div>
          <CTACard
            title="I Want a Quote"
            description="Get a quick response within 1 day! We'll connect with you to schedule a meeting and discuss how we can work together."
            color="bg-white"
          />
        </div>
      </div>
    </section>
  )
}

function CTACard({ title, description, color }) {
  return (
    <div
      className={`${color} border-4 border-black rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                    transform transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
    >
      <h3 className="text-4xl font-bold text-black mb-4">{title}</h3>
      <p className="text-xl text-gray-800">{description}</p>
    </div>
  )
}

