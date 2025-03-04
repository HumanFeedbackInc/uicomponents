import OnboardingForm from "@/components/onboarding-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Investor Onboarding</h1>
        <OnboardingForm />
      </div>
    </main>
  )
}

