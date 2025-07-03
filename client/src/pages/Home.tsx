import { siteContent } from "../data/siteContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "wouter";

const { hero, services, why } = siteContent.home;

export default function Home() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="gradient-hero dark:gradient-hero-dark min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-brand rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-brand rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-plum rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-n5 dark:text-white leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-red-brand to-blue-brand bg-clip-text text-transparent">
                Aionion
              </span>{" "}
              Insurance
            </h1>
            <p className="text-2xl lg:text-3xl text-n20 dark:text-gray-300 font-medium">
              {hero.tagline.split("=").map((part, index) => (
                <span key={index}>
                  {index === 1 ? (
                    <span className="text-red-brand font-bold">{part}</span>
                  ) : (
                    part
                  )}
                  {index === 0 && "="}
                </span>
              ))}
            </p>
            <p className="max-w-4xl mx-auto text-lg text-n20 dark:text-gray-400 leading-relaxed">
              {hero.paragraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link href="/products">
                <Button className="btn-primary text-white px-8 py-4 rounded-card shadow-lg hover:shadow-xl font-semibold text-lg">
                  {hero.cta}
                </Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="glassmorphism dark:glassmorphism-dark text-n5 dark:text-white px-8 py-4 rounded-card font-semibold text-lg hover:bg-white/30 transition-all"
                  >
                    Get a Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="glassmorphism dark:glassmorphism-dark border-0 max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-n5 dark:text-white text-center">
                      Coming Soon!
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-center space-y-4 py-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-brand to-red-brand rounded-full flex items-center justify-center mx-auto">
                      <i className="fas fa-calculator text-white text-2xl"></i>
                    </div>
                    <p className="text-n20 dark:text-gray-400">
                      Our online quote system is coming soon! For now, please contact us directly for personalized insurance quotes.
                    </p>
                    <p className="text-sm text-n20 dark:text-gray-500">
                      Call us or visit our contact page for immediate assistance.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-n5 dark:text-white mb-6">
              {services.heading}
            </h2>
            <p className="text-xl text-n20 dark:text-gray-400 max-w-3xl mx-auto">
              We bring you a wide range of insurance products from top insurers under one roof
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <Card className="glassmorphism dark:glassmorphism-dark card-hover border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-brand to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-n5 dark:text-white mb-4">Term Insurance Plans</h3>
                <p className="text-n20 dark:text-gray-400">
                  Pure protection plans that secure your family's future with comprehensive coverage.
                </p>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="glassmorphism dark:glassmorphism-dark card-hover border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-brand to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-heartbeat text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-n5 dark:text-white mb-4">Health Insurance</h3>
                <p className="text-n20 dark:text-gray-400">
                  Comprehensive medical coverage for individuals, families, and senior citizens.
                </p>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="glassmorphism dark:glassmorphism-dark card-hover border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-plum to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-car text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-n5 dark:text-white mb-4">General Insurance</h3>
                <p className="text-n20 dark:text-gray-400">
                  Protect your assets and journeys with motor and travel insurance.
                </p>
              </CardContent>
            </Card>
            
            {/* Service Card 4 */}
            <Card className="glassmorphism dark:glassmorphism-dark card-hover border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-mint to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-n5 dark:text-white mb-4">SME & Corporate</h3>
                <p className="text-n20 dark:text-gray-400">
                  Tailored risk solutions for businesses of every size and industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 gradient-hero dark:gradient-hero-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-n5 dark:text-white mb-6">
              {why.heading}
            </h2>
            <p className="text-xl text-n20 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our comprehensive approach to insurance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {why.bullets.map((item, index) => {
              const gradients = [
                "from-blue-brand to-blue-600",
                "from-red-brand to-red-600",
                "from-plum to-purple-600",
                "from-mint to-green-600",
                "from-blue-brand to-red-brand"
              ];
              
              const icons = [
                "fas fa-network-wired",
                "fas fa-user-tie",
                "fas fa-eye",
                "fas fa-clock",
                "fas fa-cogs"
              ];
              
              return (
                <div key={index} className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradients[index]} rounded-full flex items-center justify-center mx-auto`}>
                    <i className={`${icons[index]} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-n5 dark:text-white">{item}</h3>
                  <p className="text-n20 dark:text-gray-400">
                    {index === 0 && "Compare and choose from multiple insurance providers under one roof."}
                    {index === 1 && "Get expert guidance tailored to your specific needs and budget."}
                    {index === 2 && "Clear, honest communication with no hidden fees or surprises."}
                    {index === 3 && "Quick and efficient support during your claim process."}
                    {index === 4 && "Complete policy lifecycle management from purchase to claims."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
