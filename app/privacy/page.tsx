import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-4xl text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Information We Collect</h2>
              <p className="text-foreground mb-4">
                Heritage Shipping Limited ("we," "our," or "us") collects information you provide directly to us, such
                as when you create an account, request a quote, track shipments, or contact us for support.
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Business information (company name, address, tax ID)</li>
                <li>Shipment details and tracking information</li>
                <li>Payment and billing information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>Provide, maintain, and improve our shipping services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Comply with legal obligations and industry regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Information Sharing</h2>
              <p className="text-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Data Security</h2>
              <p className="text-foreground mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@heritageshipbd.com
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
