import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HelpCircle, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: "What file formats do you provide for digital products?",
      answer: "We typically provide PNG, JPG, and SVG formats for illustrations. Specific formats are listed in each product description. For custom work, we can provide additional formats upon request."
    },
    {
      question: "How long does custom illustration work take?",
      answer: "Timeline varies by project complexity. Simple logos take 3-5 days, while complex character designs may take 1-2 weeks. Rush orders are available for an additional fee. We'll provide a specific timeline when you submit your request."
    },
    {
      question: "Do you offer commercial licenses?",
      answer: "Yes, most of our products include commercial licensing. Check individual product descriptions for specific license terms. For custom work, commercial rights are typically included unless otherwise specified."
    },
    {
      question: "Can I request revisions for custom work?",
      answer: "Yes, we include up to 3 rounds of revisions in our custom illustration packages. Additional revisions may incur extra charges. We work closely with you to ensure the final result meets your expectations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other payment methods through our secure payment processors. Payment is typically required before work begins on custom projects."
    },
    {
      question: "Can I use your illustrations for print-on-demand?",
      answer: "Yes, many of our digital products are suitable for print-on-demand services. Check the license terms for each product. For custom work, we can specifically design for print-on-demand applications."
    },
    {
      question: "Do you provide source files for custom illustrations?",
      answer: "Source files (such as AI, PSD, or original vector files) are available for an additional fee. Standard delivery includes high-resolution PNG/JPG files. Let us know if you need source files when requesting a quote."
    },
    {
      question: "What if I'm not satisfied with my custom illustration?",
      answer: "We work with you through multiple revision rounds to ensure satisfaction. If there are significant issues with the final product that cannot be resolved through revisions, we may offer a partial refund based on the circumstances."
    },
    {
      question: "Can you match a specific art style?",
      answer: "Yes, we can work in various art styles. When requesting custom work, please provide reference images or detailed descriptions of the style you're looking for. This helps us provide an accurate quote and timeline."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer discounts for bulk orders of digital products and multiple custom illustration projects. Contact us with details about your project for a custom quote."
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, products, and processes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-start space-x-3 text-lg">
                  <HelpCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>{faq.question}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is ready to help with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/support">Contact Support</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#quote">Request Custom Quote</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FAQ

