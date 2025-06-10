import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, RefreshCw, XCircle } from "lucide-react";

const PaymentTerms = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment & Rights Guarantee</h1>
        <p className="text-xl text-gray-600">Ensuring a fair and transparent process for both clients and designers.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Payment Terms & Protection</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              To initiate any project, a <strong className="text-primary">50% upfront payment is required</strong>. The remaining 50% will be due upon project completion and your final approval.
            </p>
            <p className="text-gray-700">
              We utilize secure payment processing via Stripe, accepting all major credit cards and other convenient payment methods.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">Deposit Refundability:</h3>
            <p className="text-gray-700">
              <strong className="text-primary">50% of the upfront payment is refundable</strong> if cancellation occurs within 48 hours of booking and before any work begins.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">Project Milestones:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li><strong className="text-primary">25% due at project start</strong> (part of the 50% upfront)</li>
              <li><strong className="text-primary">50% after first concept presentation</strong> (remaining 25% of upfront, if applicable, or first milestone payment)</li>
              <li><strong className="text-primary">25% on final delivery</strong></li>
            </ul>
            <p className="text-gray-700">
              This milestone-based payment structure allows for partial refunds if a project is canceled mid-way, based on the work completed up to that point.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <RefreshCw className="h-6 w-6 text-primary" />
              <span>Revisions & Quality Guarantee</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              We are committed to your satisfaction. Each project includes <strong className="text-primary">one free revision</strong> to ensure the final artwork meets your vision.
            </p>
            <p className="text-gray-700">
              Any additional revisions beyond the included free revision will be subject to an additional charge, which will be communicated and agreed upon beforehand.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">Quality Assurance:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Professional quality standards for all artwork</li>
              <li>Timely delivery commitment</li>
              <li>Clear communication throughout the design process</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <XCircle className="h-6 w-6 text-primary" />
              <span>Cancellation Terms</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Client-Initiated Cancellations:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>If canceled after concept presentation, no refunds will be issued for the work completed up to that point.</li>
              <li>Unused revisions or services are not refundable.</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800">Designer-Initiated Cancellations:</h3>
            <p className="text-gray-700">
              In the rare event that we must cancel a project due to personal emergency or unforeseen capacity issues, a <strong className="text-primary">full refund will be provided</strong> for any payments made, including the upfront deposit.
            </p>
            <h3 className="text-lg font-semibold text-gray-800">Timeline-Linked Terms:</h3>
            <p className="text-gray-700">
              If the client is unresponsive for more than 14 days without prior notification, the project may be marked inactive and no refund will be issued for work completed or payments made.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>Rights & Ownership</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Client Rights:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Full ownership of the final artwork is transferred to the client upon receipt of final payment.</li>
              <li>The client receives all necessary file formats for their intended use.</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800">Designer Rights:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>The designer retains the right to display the completed artwork in their portfolio for promotional purposes.</li>
              <li>Attribution may be requested for certain projects, as agreed upon in the initial contract.</li>
            </ul>
            <p className="text-gray-700">
              All terms related to copyright and usage will be clearly outlined in the project agreement.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-gray-600 text-sm mt-12">
        <p>For any further questions regarding our payment terms or rights guarantee, please refer to our <a href="/support" className="text-primary hover:underline">Support page</a> or contact us directly.</p>
      </div>
    </div>
  );
};

export default PaymentTerms;


