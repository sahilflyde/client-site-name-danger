"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./sectionHeader";
import Card from "./value";
import Container from "./spacing";

export default function CareerWhyWork({
  header = {
    title: "Why Work at Hirezy?",
    subtitle:
      "We believe in creating an environment where talent thrives and innovation flourishes.",
    align: "center",
    className: "careers-title",
  },

  cards = [
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Growth Opportunities",
      description:
        "Continuous learning and development programs to help you grow.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
      className: "why-hire-card",
    },
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Collaborative Culture",
      description:
        "Work with passionate people who support and inspire each other.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
    },
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Work-Life Balance",
      description:
        "Flexible schedules, remote options, and generous time-off policies.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
    },
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Cutting-Edge Tech",
      description:
        "Work with the latest tools and technologies to solve real problems.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
    },
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Competitive Benefits",
      description: "Health coverage, equity options, and performance bonuses.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
    },
    {
      variant: "tertiary",
      bgVariant: "white",
      title: "Global Impact",
      description: "Transform how companies find and hire talent worldwide.",
      iconSrc:
        "https://ik.imagekit.io/75zj3bigp/Icon.png?updatedAt=1762083596654",
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
    <div className="why-work">
      <Container variant="primary">
        <SectionHeader
          title={header.title}
          subtitle={header.subtitle}
          align={isMobile ? "left" : header.align}
          className={header.className}
        />

        <div className="why-hire-cards-container">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Container>
    </div>
  );
}
