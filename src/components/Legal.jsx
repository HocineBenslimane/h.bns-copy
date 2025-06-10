import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText,
  Shield,
  Globe,
  Scale
} from 'lucide-react'

const Legal = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Legal Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Terms and conditions, privacy policy, and legal information for H.BNS LLC services.
          </p>
        </div>

        <Tabs defaultValue="terms" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="export">Export Restrictions</TabsTrigger>
          </TabsList>

          {/* Terms and Conditions */}
          <TabsContent value="terms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Terms and Conditions</span>
                </CardTitle>
                <CardDescription>
                  Last updated: December 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">1. Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    H.BNS LLC provides custom illustration services and digital products. All work is original and created specifically for each client unless otherwise specified. We offer various illustration services including logos, character designs, book covers, and custom artwork.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">2. Payment Terms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Payment is required before work begins on custom projects. Digital products must be paid for before download access is granted. We accept major credit cards and PayPal through secure payment processors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">3. Intellectual Property</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upon full payment, clients receive rights to use commissioned work as specified in the project agreement. H.BNS LLC retains the right to display work in portfolios and marketing materials unless otherwise agreed upon in writing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">4. Project Timeline</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Project timelines are estimates and may vary based on complexity and revision requirements. Rush orders are available for additional fees. Delays caused by client feedback or approval processes may extend the timeline.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">5. Limitation of Liability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    H.BNS LLC's liability is limited to the amount paid for services. We are not responsible for any indirect or consequential damages arising from the use of our services or products.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">6. Governing Law</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These terms are governed by the laws of the United States. Any disputes will be resolved in accordance with applicable federal and state laws.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Policy */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Privacy Policy</span>
                </CardTitle>
                <CardDescription>
                  How we collect, use, and protect your information
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We collect only necessary information to provide our services and process payments. This includes contact information (name, email, phone), project details, and payment information processed through secure third-party providers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contact information is used solely for project communication and customer support. We do not sell or share personal information with third parties except as required for payment processing and service delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate security measures to protect your personal information. Payment processing is handled by secure third-party providers who comply with industry standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may request access to, correction of, or deletion of your personal data at any time by contacting support@hbnsllc.com. We will respond to such requests within a reasonable timeframe.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Cookies and Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our website may use cookies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Restrictions */}
          <TabsContent value="export" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Export Restrictions</span>
                </CardTitle>
                <CardDescription>
                  International availability and restrictions
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Global Availability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our digital products and services are available worldwide. However, we comply with all applicable export laws and regulations of the United States and international jurisdictions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Restricted Jurisdictions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certain products may not be available in all jurisdictions due to local laws or restrictions. We reserve the right to restrict access to our services in compliance with applicable laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    By using our services, you agree to comply with all applicable local, state, national, and international laws and regulations. You are responsible for ensuring that your use of our products complies with applicable laws in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Updates to Restrictions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Export restrictions may change based on evolving legal requirements. We will update this information as necessary and notify users of significant changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact for Legal Questions */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Scale className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Legal Questions?</h3>
            <p className="text-gray-600 mb-6">
              If you have questions about our legal terms or need clarification on any policies, please contact our support team.
            </p>
            <Button size="lg" asChild>
              <a href="/support">Contact Support</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Legal

