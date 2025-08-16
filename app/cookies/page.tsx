import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-4xl text-foreground mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">What Are Cookies</h2>
              <p className="text-foreground mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They help us provide you with a better experience by remembering your preferences and improving
                our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Types of Cookies We Use</h2>

              <div className="mb-6">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">Essential Cookies</h3>
                <p className="text-foreground mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-foreground mb-2">
                  These cookies help us understand how visitors interact with our website by collecting anonymous
                  information.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">Functional Cookies</h3>
                <p className="text-foreground mb-2">
                  These cookies enable enhanced functionality and personalization, such as remembering your login
                  details.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Managing Cookies</h2>
              <p className="text-foreground mb-4">
                You can control and manage cookies in various ways. Most web browsers automatically accept cookies, but
                you can modify your browser settings to decline cookies if you prefer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Third-Party Cookies</h2>
              <p className="text-foreground mb-4">
                We may use third-party services that place cookies on your device to help us analyze website traffic and
                improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground">
                If you have any questions about our Cookie Policy, please contact us at:
                <br />
                Email: info@heritageshipbd.com
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
