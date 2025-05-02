import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Publication {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  citations: number;
  url: string;
}

const publications: Publication[] = [
  {
    title: "REPTOR and CREBRF encode key regulators of muscle energy metabolism",
    authors: "P Saavedra, PA Dumesic, Y Hu, E Filine, P Jouandin, R Binari, J Rodiger, et al.",
    publisher: "Nature Communications",
    year: 2023,
    citations: 14,
    url: "https://www.nature.com/articles/s41467-023-40595-1",
  },
  {
    title: "Next-generation large-scale binary protein interaction network for Drosophila melanogaster",
    authors: "HW Tang, K Spirohn, Y Hu, T Hao, IA Kovács, Y Gao, R Binari, J Rodiger, et al.",
    publisher: "Nature Communications",
    year: 2023,
    citations: 22,
    url: "https://www.nature.com/articles/s41467-023-37876-0",
  },
  {
    title: "Paralog Explorer: A resource for mining information about paralogs in common research organisms",
    authors: "Y Hu, B Ewen-Campen, A Comjean, J Rodiger, SE Mohr, N Perrimon",
    publisher: "Computational and Structural Biotechnology Journal",
    year: 2022,
    citations: 12,
    url: "https://www.sciencedirect.com/science/article/pii/S2001037022005359",
  },
  {
    title: "SNP-CRISPR: A Web Tool for SNP-Specific Genome Editing",
    authors: "CL Chen, J Rodiger, V Chung, R Viswanatha, SE Mohr, Y Hu, N Perrimon",
    publisher: "G3",
    year: 2020,
    citations: 53,
    url: "https://academic.oup.com/g3journal/article/10/2/489/6026318",
  },
  {
    title: "Pooled CRISPR Screens in Drosophila Cells",
    authors: "R Viswanatha, R Brathwaite, Y Hu, Z Li, J Rodiger, P Merckaert, V Chung, et al.",
    publisher: "Current Protocols in Molecular Biology",
    year: 2019,
    citations: 13,
    url: "https://currentprotocols.onlinelibrary.wiley.com/doi/10.1002/cpmb.111",
  },
];

export function Publications() {
  return (
    <section id="publications" className="flex flex-col items-center justify-center min-h-[60vh] py-12 scroll-mt-12">
      <div className="container max-w-5xl px-4 md:px-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h2>
          <p className="text-muted-foreground text-lg">
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
              <h3 className="text-xl font-semibold">
                <Link 
                  href={pub.url}
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </Link>
              </h3>
              <p className="text-muted-foreground">{pub.authors}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {pub.publisher} • {pub.year}
                </p>
                <p className="text-sm text-muted-foreground">
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
    </section>
  );
} 