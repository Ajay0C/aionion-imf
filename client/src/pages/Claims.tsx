import { siteContent } from "../data/siteContent";
import { Card, CardContent } from "@/components/ui/card";

const { pageTitle, intro, services, closing } = siteContent.claims;

export default function Claims() {
  const serviceIcons = [
    "fas fa-file-alt",
    "fas fa-handshake",
    "fas fa-compass",
    "fas fa-bell",
    "fas fa-gavel",
  ];

  const serviceColors = [
    "from-blue-brand to-blue-600",
    "from-red-brand to-red-600",
    "from-plum to-purple-600",
    "from-mint to-green-600",
    "from-blue-brand to-red-brand",
  ];

  const serviceDescriptions = [
    "Complete assistance with gathering and organizing required documents.",
    "Direct communication with insurance companies on your behalf.",
    "Step-by-step guidance through the entire claim process.",
    "Regular updates on your claim status and progress.",
    "Expert assistance in resolving claim disputes and challenges.",
  ];

  return (
    <div className="page-content">
      <section className="gradient-hero dark:gradient-hero-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-n5 dark:text-white mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-n20 dark:text-gray-400 max-w-3xl mx-auto">
              {intro}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glassmorphism dark:glassmorphism-dark text-center card-hover border-0">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${serviceColors[index]} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${serviceIcons[index]} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-n5 dark:text-white mb-4">{service}</h3>
                  <p className="text-n20 dark:text-gray-400">
                    {serviceDescriptions[index]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="glassmorphism dark:glassmorphism-dark text-center border-0">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-red-brand to-blue-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-n5 dark:text-white mb-4">Our Commitment</h3>
              <p className="text-lg text-n20 dark:text-gray-400 max-w-2xl mx-auto">
                {closing} Your peace of mind is our priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
