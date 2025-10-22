import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { allProjects } from "@/data/project";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Project not found
      </div>
    );
  }

  const relatedProjects = allProjects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen py-10">
      <SiteHeader />
      <main>
        <section className="container py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="mb-8 md:mt-10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Projects
              </Button>
            </Link>

            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-sm text-muted-foreground mb-2">
                  Category
                </div>
                <div className="font-semibold">{project.category}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Date</div>
                <div className="font-semibold">{project.date}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {project.problem && (
          <section className="container py-12 md:py-20 bg-secondary/30">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                PROJECT OVERVIEW
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Problem:</strong>{" "}
                  {project.problem}
                </p>
                <p>
                  <strong className="text-foreground">Solution:</strong>{" "}
                  {project.solution}
                </p>
                <p>
                  <strong className="text-foreground">Challenge:</strong>{" "}
                  {project.challenge}
                </p>
                <p>
                  <strong className="text-foreground">Summary:</strong>{" "}
                  {project.summary}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="container py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              MORE PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
