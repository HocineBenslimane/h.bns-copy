import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  RefreshCw,
  Shield,
  XCircle,
  AlertTriangle,
  Instagram
} from 'lucide-react'

const Policies = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Policies & Returns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our policies regarding returns, refunds, cancellations, and dispute resolution.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span>Return Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                For digital products: All sales are final due to the nature of digital goods. 
                However, if you experience technical issues, please contact us within 7 days.
              </p>
              <p className="text-sm text-gray-600">
                For custom illustration services: Revisions are included as specified in your project agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Refund Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Refunds may be issued in cases of:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Technical issues preventing download</li>
                <li>• Duplicate purchases</li>
                <li>• Significant quality issues</li>
              </ul>
              <p className="text-sm text-gray-600">
                Refund requests must be made within 14 days of purchase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <XCircle className="h-5 w-5 text-primary" />
                <span>Cancellation Policy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Custom illustration projects:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Can be cancelled within 24 hours of order</li>
                <li>• 50% refund if cancelled before work begins</li>
                <li>• No refund once work has started</li>
              </ul>
              <p className="text-sm text-gray-600">
                Digital products cannot be cancelled after download.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dispute Resolution */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <span>Dispute Resolution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              If you have a dispute regarding your purchase, please contact us first at <a href="mailto:refund@h-bns.shop" className="text-primary hover:underline">refund@h-bns.shop</a>. 
              We are committed to resolving issues fairly and promptly.
            </p>
            <p className="text-gray-600">
              If we cannot resolve the dispute directly, you may file a dispute through your payment provider 
              or seek resolution through appropriate legal channels in accordance with the laws of the United States.
            </p>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Our Policies?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help clarify any policy questions you may have.
            </p>
            <Button size="lg" asChild className="mb-4">
              <a href="/support">Contact Support</a>
            </Button>
            <p className="text-gray-600 text-sm">
              Follow us on Instagram for updates and inspiration:
              <a href="https://www.instagram.com/hbns_llc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-center mt-2">
                <Instagram className="h-5 w-5 mr-2" /> @hbns_llc
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Policies