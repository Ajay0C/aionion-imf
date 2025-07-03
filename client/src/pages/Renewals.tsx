import { siteContent } from "../data/siteContent";
import { Card, CardContent } from "@/components/ui/card";

const { pageTitle, intro, steps, note } = siteContent.renewals;

export default function Renewals() {
  const stepColors = [
    "from-blue-brand to-blue-600",
    "from-red-brand to-red-600",
    "from-plum to-purple-600",
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="glassmorphism dark:glassmorphism-dark text-center card-hover border-0">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stepColors[index]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-n5 dark:text-white mb-4">
                    {step.text}
                  </h3>
                  <p className="text-n20 dark:text-gray-400">
                    {index === 0 && "Provide your existing policy information for quick processing."}
                    {index === 1 && "Compare renewal options and choose the best plan for you."}
                    {index === 2 && "Complete your renewal with our secure payment gateway."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="glassmorphism dark:glassmorphism-dark text-center border-0">
            <CardContent className="p-8">
              <div className="w-20 h-20 bg-gradient-to-r from-mint to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-info-circle text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-n5 dark:text-white mb-4">Important Note</h3>
              <p className="text-lg text-n20 dark:text-gray-400 max-w-2xl mx-auto">
                {note}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
