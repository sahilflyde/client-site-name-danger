"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./sectionHeader";
import JobCard from "./jobCard";
import Container from "./spacing";

export default function CareersOpenPosition({
  mainHeader = {
    label: "Careers",
    title: "Join Our Mission to Transform Hiring",
    subtitle:
      "We're building the future of recruitment technology. Join a team of innovators and problem-solvers.",
    align: "center",
  },

  sectionHeader = {
    title: "Open Positions",
    subtitle:
      "Find your next career opportunity and help us shape the future of recruitment.",
    align: "center",
    className: "careers-title",
  },

  jobs = [
    {
      category: "website",
      title: "Senior Website Designer",
      description:
        "Lead the design of our core recruitment platform with intuitive user experiences.",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      category: "engineering",
      title: "Frontend Developer",
      description:
        "Build scalable and performant UI using modern frontend technologies.",
      location: "India",
      jobType: "Full-time",
    },
    {
      category: "product",
      title: "Product Manager",
      description:
        "Drive product vision and collaborate with cross-functional teams.",
      location: "Remote",
      jobType: "Full-time",
    },
    {
      category: "marketing",
      title: "Growth Marketer",
      description: "Plan and execute campaigns to accelerate user growth.",
      location: "Remote",
      jobType: "Contract",
    },
  ],
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Container variant="primary">
      {/* MAIN HEADER */}
      {/* <div className="careers-main-heading">
        <Container variant="bottomSpacing">
          <SectionHeader
            label={mainHeader.label}
            title={mainHeader.title}
            subtitle={mainHeader.subtitle}
            align={isMobile ? "left" : mainHeader.align}
          />
        </Container>
      </div> */}

      {/* OPEN POSITIONS */}
      <Container variant="topSpacing">
        <div className="careers-sub-heading">
          <SectionHeader
            title={sectionHeader.title}
            subtitle={sectionHeader.subtitle}
            align={isMobile ? "left" : sectionHeader.align}
            className={sectionHeader.className}
          />
        </div>

        <div className="job-cards-container">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </Container>
    </Container>
  );
}
