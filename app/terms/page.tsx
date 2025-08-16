import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-4xl text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-foreground mb-4">
                By accessing and using Heritage Shipping Limited's services, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Services</h2>
              <p className="text-foreground mb-4">Heritage Shipping Limited provides:</p>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>Sea freight and ocean shipping services</li>
                <li>Air freight and cargo services</li>
                <li>Land transportation and logistics</li>
                <li>Warehousing and storage solutions</li>
                <li>Customs clearance and documentation</li>
                <li>Crew immigration and maritime services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">User Responsibilities</h2>
              <p className="text-foreground mb-4">Users agree to:</p>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay all fees and charges in a timely manner</li>
                <li>Properly package and label shipments</li>
                <li>Not ship prohibited or restricted items</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-foreground mb-4">
                Heritage Shipping Limited's liability is limited to the terms specified in our shipping contracts and
                applicable maritime law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Contact Information</h2>
              <p className="text-foreground">
                For questions about these Terms of Service, contact us at:
                <br />
                Email: legal@heritageshipbd.com
                <br />
                Phone: +880-31-2510793
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
