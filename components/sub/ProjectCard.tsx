import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  key:any;
}

const ProjectCard = ({ src, title, description, url, key }: Props) => {
  return (
    
    <div key={key} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Link href={url} >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      </Link>
      <div className="relative p-4">
        <Link href={url}>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </Link>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
     
    </div>
   
  );
};

export default ProjectCard;
