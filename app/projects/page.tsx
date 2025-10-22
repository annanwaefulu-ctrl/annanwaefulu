import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { allProjects } from "@/data/project";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-10">
      <SiteHeader />
      <main>
        <section className="container ">
          <div className="max-w-6xl mx-auto">
            <div className=" md:mt-15">
              <div className="flex items-center gap-6">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight whitespace-nowrap">
                  FEATURED PROJECTS
                </h1>
                <div className="flex-1 h-[2px] bg-black"></div>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl mt-6 leading-relaxed">
                These selected projects reflect my passion for blending strategy
                with creativity — solving real problems through thoughtful
                design and impactful storytelling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:pb-20">
              {allProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
