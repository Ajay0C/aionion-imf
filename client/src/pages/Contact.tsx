import { siteContent } from "../data/siteContent";
import { Card, CardContent } from "@/components/ui/card";

const { pageTitle, addressLines, email, businessHours } = siteContent.contact;

export default function Contact() {

  return (
    <div className="page-content">
      <section className="gradient-hero dark:gradient-hero-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-n5 dark:text-white mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-n20 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch with our expert team for personalized insurance solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <Card className="glassmorphism dark:glassmorphism-dark border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-brand to-blue-600 rounded-lg flex items-center justify-center mx-auto">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-n5 dark:text-white">Our Office</h3>
                  {addressLines.map((line, index) => (
                    <p key={index} className="text-n20 dark:text-gray-400">{line}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism dark:glassmorphism-dark border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-brand to-red-600 rounded-lg flex items-center justify-center mx-auto">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-n5 dark:text-white">Email Us</h3>
                  <p className="text-n20 dark:text-gray-400">{email}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism dark:glassmorphism-dark border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-plum to-purple-600 rounded-lg flex items-center justify-center mx-auto">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-n5 dark:text-white">Business Hours</h3>
                  <p className="text-n20 dark:text-gray-400">
                    {businessHours.split(" · ")[0]}
                  </p>
                  <p className="text-n20 dark:text-gray-400">
                    {businessHours.split(" · ")[1]}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
