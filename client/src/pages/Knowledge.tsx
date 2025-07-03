import { siteContent } from "../data/siteContent";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const { pageTitle, categories } = siteContent.knowledge;

export default function Knowledge() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categoryIcons = [
    "fas fa-graduation-cap",
    "fas fa-balance-scale",
    "fas fa-calculator",
    "fas fa-newspaper",
    "fas fa-question-circle",
  ];

  const categoryColors = [
    "from-blue-brand to-blue-600",
    "from-red-brand to-red-600",
    "from-plum to-purple-600",
    "from-mint to-green-600",
    "from-blue-brand to-red-brand",
  ];

  const categoryDescriptions = [
    "Understanding fundamental insurance concepts, terms, and principles.",
    "Detailed comparisons to help you choose the right insurance products.",
    "Maximize your tax savings through strategic insurance planning.",
    "Stay updated with the latest regulatory changes and guidelines.",
    "Find quick answers to common insurance questions and concerns.",
  ];

  const buttonColors = [
    "text-blue-brand dark:text-blue-400",
    "text-red-brand dark:text-red-400",
    "text-plum dark:text-purple-400",
    "text-mint dark:text-green-400",
    "",
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
              Expand your insurance knowledge with our comprehensive resources and guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className={`glassmorphism dark:glassmorphism-dark card-hover border-0 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${categoryColors[index]} rounded-xl flex items-center justify-center mb-6`}>
                    <i className={`${categoryIcons[index]} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-n5 dark:text-white mb-4">{category}</h3>
                  <p className="text-n20 dark:text-gray-400 mb-6">
                    {categoryDescriptions[index]}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      {index === 4 ? (
                        <Button className="btn-primary text-white px-6 py-3 rounded-card font-semibold">
                          Browse FAQs
                        </Button>
                      ) : (
                        <button className={`${buttonColors[index]} font-semibold hover:underline`}>
                          Learn More →
                        </button>
                      )}
                    </DialogTrigger>
                    <DialogContent className="glassmorphism dark:glassmorphism-dark border-0 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-n5 dark:text-white text-center">
                          Coming Soon!
                        </DialogTitle>
                      </DialogHeader>
                      <div className="text-center space-y-4 py-4">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-brand to-red-brand rounded-full flex items-center justify-center mx-auto">
                          <i className="fas fa-rocket text-white text-2xl"></i>
                        </div>
                        <p className="text-n20 dark:text-gray-400">
                          We're working hard to bring you comprehensive {category.toLowerCase()} resources. 
                          Stay tuned for updates!
                        </p>
                        <p className="text-sm text-n20 dark:text-gray-500">
                          In the meantime, feel free to contact us for any insurance-related questions.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
