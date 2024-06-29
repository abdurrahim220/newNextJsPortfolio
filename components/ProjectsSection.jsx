"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RahimStore",
    description: "e-commerce website store",
    image: "https://i.ibb.co/qg73Lhg/rahim-Store.png",
    tag: ["FullStack", ""],
    gitUrl: "https://github.com/abdurrahim220/rahim_store.git",
    liveLink: "https://rahimstore-67b51.web.app",
  },
  {
    id: 2,
    title: "MovieX",
    description: "Movie site like netflix",
    image: "https://i.ibb.co/3NSX9Hm/moviex-dun-vercel-app.png",
    tag: ["Frontend", ""],
    gitUrl: "https://github.com/abdurrahim220/moviex",
    liveLink: "https://moviex-dun.vercel.app",
  },
  {
    id: 3,
    title: "DhakaBusTicket",
    description: "User can bus ticket from here",
    image: "https://i.ibb.co/qsKZ0G4/dhaka-bus-ticket.png",
    tag: ["FullStack", ""],
    gitUrl: "https://github.com/abdurrahim220/BusTicket",
    liveLink: "https://658b9bc256d7341880d1a1bb--grand-manatee-e3657d.netlify.app/",
  },
  {
    id: 4,
    title: "Toy Store",
    description: "It's a toy store site",
    image:
      "https://i.ibb.co/hdD7pNB/screencapture-cat-toy-e6d24-web-app-2023-12-25-22-28-39.png",
    tag: ["FullStack", ""],
    gitUrl: "https://github.com/abdurrahim220/ToyStore_Server.git",
    liveLink: "https://cat-toy-e6d24.web.app/",
  },
  {
    id: 5,
    title: "CarerHub",
    description: "This is a job finder web site",
    image:
      "https://i.ibb.co/ZKtB4p7/screencapture-find-job-omega-vercel-app-2023-12-26-12-03-10.png",
    tag: ["Frontend", ""],
    gitUrl: "https://github.com/abdurrahim220/FindJob.git",
    liveLink: "https://find-job-omega.vercel.app",
  },
  {
    id: 6,
    title: "Influencer Hub",
    description: "This is a influencer hub landing page",
    image:
      "https://i.ibb.co/9hrWfBg/screencapture-influencer-cyan-vercel-app-2023-12-26-12-16-44.png",
    tag: ["Frontend", ""],
    gitUrl: "https://github.com/abdurrahim220/influencer.git",
    liveLink: "https://influencer-cyan.vercel.app",
  },
  {
    id: 7,
    title: "Convention",
    description: "This is a Convention hub landing page",
    image:
      "https://i.ibb.co/PMmBvVK/screencapture-convention-seven-vercel-app-2023-12-26-12-27-51.png",
    tag: ["Frontend", ""],
    gitUrl: "https://github.com/abdurrahim220/convention.git",
    liveLink: "https://convention-seven.vercel.app",
  },
  {
    id: 8,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    liveLink: "/",
  },
  {
    id: 9,
    title: "House Hunting",
    description: "Project 5 description",
    image:
      "https://i.ibb.co/HdCSH3k/screencapture-gentle-sprinkles-7fc787-netlify-app-2024-01-29-18-44-03-min.png",
    tag: ["FullStack", ""],
    gitUrl: "https://github.com/abdurrahim220/houseRent_Backend.git",
    liveLink: "https://gentle-sprinkles-7fc787.netlify.app/",
  },
  {
    id: 10,
    title: "Image Ai",
    description: "Edit or update your image with the help of Ai",
    image:
      "https://i.ibb.co/N7hm4mq/imageai.png",
    tag: ["NextJs", ""],
    gitUrl: "https://github.com/abdurrahim220/image",
    liveLink: "https://rahim-imageai.vercel.app/",
  },
    {
    id: 11,
    title: "Business",
    description: "Improve your business with business web app",
    image:
      "https://i.ibb.co/BjhWj0B/Fire-Shot-Capture-001-Home-Business-business-next-ruddy-vercel-app.png",
    tag: ["NextJs", ""],
    gitUrl: "https://github.com/abdurrahim220/business-next",
    liveLink: "https://business-next-ruddy.vercel.app/",
  },
    {
    id: 12,
    title: "Friend Zone",
    description: "Online chat application",
    image:
      "https://i.ibb.co/jDBdDj1/image.png",
    tag: ["FullStack", ""],
    gitUrl: "https://github.com/abdurrahim220/friend_zone",
    liveLink: "https://friend-zone-5qg7.onrender.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("FullStack");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJs"
          isSelected={tag === "NextJs"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.liveLink}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
