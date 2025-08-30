import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Code, Zap, Rocket, Shield, ArrowRight, Play, Star, Check } from "lucide-react";

export default function Landing() {
  const handleGetStarted = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Code Guru
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
                <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Start Building Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-700/5 to-blue-800/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-200 to-blue-300 text-blue-700 border-blue-300">
              🚀 AI-Powered Development
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 mb-8">
              Build web apps without code —{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                powered by AI
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-12">
              Create full-stack applications with our intelligent no-code builder. Design visually, 
              generate code with AI, and deploy instantly. From prototype to production in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-8">
                <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Video Player Interface */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {/* Play Button */}
                        <Button
                          size="lg"
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 transition-all duration-300 mb-4"
                        >
                          <Play className="h-6 w-6 text-white ml-1" fill="currentColor" />
                        </Button>
                        <p className="text-white/80 text-lg font-medium">Watch Code Guru in Action</p>
                        <p className="text-white/60 text-sm mt-1">See how easy it is to build apps with AI</p>
                      </div>
                    </div>
                    
                    {/* Video Preview/Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-700/20 to-blue-800/20">
                      {/* Mock UI Elements */}
                      <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm font-medium">Recording</span>
                        </div>
                      </div>
                      
                      {/* Mock drag and drop elements */}
                      <div className="absolute top-20 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="w-8 h-8 bg-purple-400/30 rounded border border-purple-300/40"></div>
                          <div className="w-8 h-8 bg-blue-400/30 rounded border border-blue-300/40"></div>
                          <div className="w-8 h-8 bg-teal-400/30 rounded border border-teal-300/40"></div>
                          <div className="w-8 h-8 bg-green-400/30 rounded border border-green-300/40"></div>
                        </div>
                      </div>
                      
                      {/* Mock code preview */}
                      <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-white/80" />
                          <span className="text-white/80 text-xs font-mono">Generating code...</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Controls Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-white/80 text-sm font-medium">3:24 Demo</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-white/60 rounded-full"></div>
                          </div>
                          <div className="text-white/80 text-sm">1:08 / 3:24</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-12">
            Trusted by teams at innovative companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-12 w-24 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Company {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-200 to-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4">
              Everything you need to build amazing apps
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              From visual design to production deployment, our platform handles the entire development lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Visual Drag & Drop Editor</CardTitle>
                <CardDescription>
                  Design your app visually with our intuitive drag-and-drop interface. No coding knowledge required.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Code Generation</CardTitle>
                <CardDescription>
                  Our AI automatically generates clean, production-ready code from your visual designs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle>One-Click Deployment</CardTitle>
                <CardDescription>
                  Deploy your applications instantly to our global CDN with just one click. No server management needed.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Full Ownership</CardTitle>
                <CardDescription>
                  You own your code and data completely. Export anytime, host anywhere, with no vendor lock-in.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-300 to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4">
              From idea to deployment in 3 simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-white">1</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 transform -translate-y-0.5"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-muted-foreground">
                Use our visual editor to design your application. Drag, drop, and customize components to create your perfect UI.
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-white">2</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 transform -translate-y-0.5"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Generate Code</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your design and automatically generates clean, optimized code that you can customize further.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Deploy</h3>
              <p className="text-muted-foreground">
                Deploy your application with one click to our global infrastructure. Your app will be live in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-400 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-900 mb-4">
              Loved by developers and founders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Startup Founder",
                content: "Code Guru helped us build our MVP in just 2 weeks. The AI code generation is incredible!",
                rating: 5
              },
              {
                name: "Mark Rodriguez",
                role: "Product Manager", 
                content: "Finally, a no-code tool that doesn't compromise on code quality. We can actually export and customize everything.",
                rating: 5
              },
              {
                name: "Emily Davis",
                role: "Developer",
                content: "I was skeptical about no-code tools, but the generated code is clean and follows best practices. Impressed!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTY1Mzk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Ready to build your next app?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers and founders who are building faster with Code Guru.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Code Guru
              </h3>
              <p className="text-gray-400 mb-4">
                The AI-powered no-code platform that helps you build full-stack applications without writing code.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  GitHub
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Discord
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#templates" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
                <li><a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#docs" className="text-gray-400 hover:text-white transition-colors">Docs</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Code Guru. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
