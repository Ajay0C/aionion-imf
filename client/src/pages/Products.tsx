import { siteContent } from "../data/siteContent";
import { Card, CardContent } from "@/components/ui/card";

const { pageTitle, intro, categories } = siteContent.products;

export default function Products() {
  const iconMap: { [key: string]: string } = {
    "Term Insurance": "fas fa-shield-alt",
    "Health Insurance": "fas fa-heartbeat",
    "General Insurance": "fas fa-car",
    "SME & Corporate Insurance": "fas fa-building",
  };

  const colorMap: { [key: string]: string } = {
    "Term Insurance": "from-blue-brand to-blue-600",
    "Health Insurance": "from-red-brand to-red-600",
    "General Insurance": "from-plum to-purple-600",
    "SME & Corporate Insurance": "from-mint to-green-600",
  };

  const checkColorMap: { [key: string]: string } = {
    "Term Insurance": "text-blue-brand",
    "Health Insurance": "text-red-brand",
    "General Insurance": "text-plum",
    "SME & Corporate Insurance": "text-mint",
  };

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="glassmorphism dark:glassmorphism-dark card-hover border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorMap[category.name]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`${iconMap[category.name]} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-n5 dark:text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-n20 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {category.plans.map((plan, planIndex) => (
                      <li key={planIndex} className="flex items-center space-x-3">
                        <i className={`fas fa-check-circle ${checkColorMap[category.name]}`}></i>
                        <span className="text-n20 dark:text-gray-400">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
