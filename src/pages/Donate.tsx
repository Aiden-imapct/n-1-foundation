import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import { Heart, Shield, Users, BookOpen, Calculator, CreditCard, Smartphone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import schoolGroup from "@/assets/gallery/school-group-photo.jpg";
import donatechildren from "@/assets/donate-children.jpg";
import smilingStudent from "@/assets/gallery/smiling-student-notebook.jpg";

const Donate = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string>("500");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const { toast } = useToast();

  const predefinedAmounts = ["100", "250", "500", "1000", "2500", "5000"];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    toast({
      title: "Thank you for your donation!",
      description: `Your ${donationType} donation of ₹${amount} will make a real difference.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={donatechildren}
              alt="School group photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>

          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-64">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-dm-serif font-normal leading-tight text-yellow-500 animate-fade-in">
                Thank you for your willingness to give!
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white italic leading-relaxed max-w-3xl mx-auto">
                Donation options will go live soon. 80G certification currently in progress
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Choose Your Donation</CardTitle>
                <CardDescription className="text-center">
                  Select how you'd like to support our mission
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Donation Type */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Donation Type</Label>
                  <RadioGroup
                    value={donationType}
                    onValueChange={(value) => setDonationType(value as "one-time" | "monthly")}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time" className="cursor-pointer">One-time Donation</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="cursor-pointer">
                        Monthly Donation
                        <Badge variant="secondary" className="ml-2">2x Impact</Badge>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Select Amount (₹)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className="h-12"
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount" className="text-sm text-muted-foreground">
                      Or enter custom amount
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <Label htmlFor="upi" className="cursor-pointer">UPI / Digital Wallets</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <Label htmlFor="card" className="cursor-pointer">Credit / Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value="bank" id="bank" />
                      <Building className="h-5 w-5 text-muted-foreground" />
                      <Label htmlFor="bank" className="cursor-pointer">Net Banking</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Donor Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full-name">Full Name *</Label>
                      <Input id="full-name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                      <Input id="pan" placeholder="Enter PAN for tax receipt" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter your address" rows={3} />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting us or any special instructions"
                    rows={3}
                  />
                </div>

                {/* Preferences */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="anonymous"
                      checked={isAnonymous}
                      onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                    />
                    <Label htmlFor="anonymous" className="text-sm">
                      Make this donation anonymous
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="updates" defaultChecked />
                    <Label htmlFor="updates" className="text-sm">
                      Send me updates about the impact of my donation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter
                    </Label>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold text-green-600 mb-1">Secure Payment</div>
                    <div className="text-muted-foreground">
                      Your donation is processed through secure, encrypted payment gateways.
                      All transactions are protected and confidential.
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  onClick={handleDonate}
                  className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                >
                  Donate ₹{customAmount || selectedAmount} {donationType === "monthly" ? "Monthly" : "Now"}
                </Button>

                {/* Tax Benefit Info */}
                <div className="text-center text-sm text-muted-foreground p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <strong>Tax Benefit:</strong> Donations to n+1 Social Foundation are eligible for
                  80G tax deduction under Income Tax Act. You'll receive a tax receipt via email.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Your Impact in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">₹100</div>
                  <div className="text-sm text-muted-foreground mb-4">provides</div>
                  <div className="font-semibold mb-3">Educational Materials</div>
                  <div className="text-sm text-muted-foreground">
                    Books, stationery, and learning resources for one student for a month
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">₹500</div>
                  <div className="text-sm text-muted-foreground mb-4">supports</div>
                  <div className="font-semibold mb-3">Teacher Training</div>
                  <div className="text-sm text-muted-foreground">
                    Professional development for one teacher, benefiting 30+ students
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">₹2500</div>
                  <div className="text-sm text-muted-foreground mb-4">funds</div>
                  <div className="font-semibold mb-3">Technology Access</div>
                  <div className="text-sm text-muted-foreground">
                    Digital devices and internet access for remote learning programs
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;