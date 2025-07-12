import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { wordpressProjects } from "@/constants";
import Image from "next/image";

const WordPress = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 Z-[50]"
      id="wordpress"
    >
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/wordpress-logo.svg"
            alt="WordPress Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            WordPress Projects
          </h1>
        </div>
        <div className="max-w-4xl text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            WordPress is a powerful content management system that powers over
            40% of all websites on the internet. With its flexibility, extensive
            plugin ecosystem, and user-friendly interface, WordPress enables the
            creation of everything from simple blogs to complex e-commerce
            platforms.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in creating custom WordPress solutions, including theme
            development, plugin customization, WooCommerce integration, and
            performance optimization. Here are some of the WordPress projects
            I&apos;ve built:
          </p>
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
        {wordpressProjects.map((project, index) => (
          <ProjectCard
            src={project.image}
            title={project.name}
            description={project.description}
            url={project.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default WordPress;
