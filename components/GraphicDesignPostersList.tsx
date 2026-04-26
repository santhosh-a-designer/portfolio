"use client";

import GraphicDesignPosterProjectCard from "@/components/GraphicDesignPosterProjectCard";
import { POSTER_PROJECTS } from "@/lib/graphicDesignProjects/posterProjects";

export default function GraphicDesignPostersList() {
  return (
    <div className="space-y-0">
      {POSTER_PROJECTS.map((project, index) => (
        <div key={project.id}>
          {index > 0 ? (
            <div className="my-8 border-t border-[#1e293b] md:my-10" aria-hidden />
          ) : null}
          <section id={project.id} className="scroll-mt-24">
            <GraphicDesignPosterProjectCard data={project} />
          </section>
        </div>
      ))}
    </div>
  );
}
