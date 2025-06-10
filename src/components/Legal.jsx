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
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Legal Information
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Terms and conditions, privacy policy, and legal information for H.BNS LLC services.
          </p>
        </div>

        <Tabs defaultValue="terms" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 h-auto sm:h-10 p-1">
            <TabsTrigger value="terms" className="w-full text-sm sm:text-base py-2 sm:py-1.5">
              Terms & Conditions
            </TabsTrigger>
            <TabsTrigger value="privacy" className="w-full text-sm sm:text-base py-2 sm:py-1.5">
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger value="export" className="w-full text-sm sm:text-base py-2 sm:py-1.5">
              Export Restrictions
            </TabsTrigger>
          </TabsList>

          {/* Terms and Conditions */}
          <TabsContent value="terms" className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Terms and Conditions</span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Last updated: December 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    1. Services
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    H.BNS LLC provides custom illustration services and digital products. All work is original and created specifically for each client unless otherwise specified. We offer various illustration services including logos, character designs, book covers, and custom artwork.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    2. Payment Terms
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Payment is required before work begins on custom projects. Digital products must be paid for before download access is granted. We accept major credit cards and PayPal through secure payment processors.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    3. Discounts and Promotional Pricing
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Discounts and promotional offers are subject to specific terms and conditions. Promotional codes cannot be combined with other offers unless explicitly stated. Discount eligibility may be limited by geographic location, customer type, or purchase history. H.BNS LLC reserves the right to modify or discontinue promotional offers at any time without prior notice. Promotional pricing is valid only during the specified promotional period.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    4. Import Duty and Tax Responsibilities
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    For customers outside the European Union (Non-EU customers), you are solely responsible for any import duties, taxes, customs fees, or other charges imposed by your local government or customs authorities. These charges are not included in our pricing and are not collected by H.BNS LLC. We recommend checking with your local customs office for specific requirements and potential charges before placing an order. H.BNS LLC is not responsible for any delays, additional costs, or issues arising from customs processing.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    5. Promotional Items and Free Gifts
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Promotional items and free gifts are provided "as is" without warranty of any kind. Free gifts and promotional items cannot be exchanged, returned, or refunded. The availability of promotional items is limited and subject to stock availability. H.BNS LLC reserves the right to substitute promotional items with items of equal or greater value. Promotional items are intended for the original purchaser and may not be resold or transferred. Abuse of promotional offers may result in cancellation of orders and restriction of future promotional eligibility.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    6. Intellectual Property
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Upon full payment, clients receive rights to use commissioned work as specified in the project agreement. H.BNS LLC retains the right to display work in portfolios and marketing materials unless otherwise agreed upon in writing.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    7. Project Timeline
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Project timelines are estimates and may vary based on complexity and revision requirements. Rush orders are available for additional fees. Delays caused by client feedback or approval processes may extend the timeline.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    8. Limitation of Liability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    H.BNS LLC's liability is limited to the amount paid for services. We are not responsible for any indirect or consequential damages arising from the use of our services or products.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    9. Governing Law
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    These terms are governed by the laws of the United States. Any disputes will be resolved in accordance with applicable federal and state laws.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Policy */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Privacy Policy</span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  How we collect, use, and protect your information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Information We Collect
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    We collect only necessary information to provide our services and process payments. This includes contact information (name, email, phone), project details, and payment information processed through secure third-party providers.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    How We Use Your Information
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Contact information is used solely for project communication and customer support. We do not sell or share personal information with third parties except as required for payment processing and service delivery.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Data Security
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    We implement appropriate security measures to protect your personal information. Payment processing is handled by secure third-party providers who comply with industry standards.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Your Rights
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    You may request access to, correction of, or deletion of your personal data at any time by contacting support@hbnsllc.com. We will respond to such requests within a reasonable timeframe.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Cookies and Tracking
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Our website may use cookies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Export Restrictions */}
          <TabsContent value="export" className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Export Restrictions</span>
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  International availability and restrictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Global Availability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Our digital products and services are available worldwide. However, we comply with all applicable export laws and regulations of the United States and international jurisdictions.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Restricted Jurisdictions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Certain products may not be available in all jurisdictions due to local laws or restrictions. We reserve the right to restrict access to our services in compliance with applicable laws.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Compliance
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    By using our services, you agree to comply with all applicable local, state, national, and international laws and regulations. You are responsible for ensuring that your use of our products complies with applicable laws in your jurisdiction.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                    Updates to Restrictions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Export restrictions may change based on evolving legal requirements. We will update this information as necessary and notify users of significant changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact for Legal Questions */}
        <Card className="mt-12 sm:mt-16 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 overflow-hidden">
          <CardContent className="p-6 sm:p-8 text-center">
            <Scale className="h-10 sm:h-12 w-10 sm:w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words">Legal Questions?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed break-words">
              If you have questions about our legal terms or need clarification on any policies, please contact our support team.
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="/support">Contact Support</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Legal

