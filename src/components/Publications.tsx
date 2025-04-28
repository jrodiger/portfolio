import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  url: string;
}

const publications: Publication[] = [
  {
    title: "Automated Identification of Protein-Ligand Binding Sites for Drug Discovery",
    authors: "J Rodiger, A Friedman, J Gilmer",
    venue: "Journal of Chemical Information and Modeling",
    year: 2023,
    citations: 8,
    url: "https://pubs.acs.org/doi/10.1021/acs.jcim.3c00788",
  },
  {
    title: "Predicting Protein-Ligand Binding Affinity and Correcting Crystal Structure Binding Poses Using Large Language Models",
    authors: "J Rodiger, A Friedman",
    venue: "bioRxiv",
    year: 2023,
    citations: 6,
    url: "https://www.biorxiv.org/content/10.1101/2023.09.11.557141v1.abstract",
  },
  {
    title: "Improving Protein-Ligand Structure Prediction with Natural Language Processing",
    authors: "J Rodiger, A Friedman, J Gilmer",
    venue: "bioRxiv",
    year: 2023,
    citations: 4,
    url: "https://www.biorxiv.org/content/10.1101/2023.02.03.526917v1.abstract",
  },
];

export function Publications() {
  return (
    <section id="publications" className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <div className="container flex items-center justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Selected academic publications and research work. View my complete publication history on{" "}
                <Link 
                  href="https://scholar.google.com/citations?user=tBd4t0gAAAAJ"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link 
                      href={pub.url}
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{pub.authors}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {pub.venue} • {pub.year}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Citations: {pub.citations}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link 
                  href="https://scholar.google.com/citations?user=tBd4t0gAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View All Publications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 