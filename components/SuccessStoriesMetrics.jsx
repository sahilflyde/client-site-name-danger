"use client";

import React from "react";
import Container from "./spacing";
import SectionHeader from "./sectionHeader";
import Metric from "./Metric";

const SuccessStoriesMetrics = ({
  title = "Trusted by Industry Leaders",
  subtitle = "Join 500+ companies that have transformed their hiring with Hirezy.",
  align = "center", 

  metrics = [
    { number: "10000+", label: "Successful Hires" },
    { number: "60%", label: "Faster Time-to-Hire" },
    { number: "500+", label: "Companies Served" },
    { number: "95%", label: "Customer Satisfaction" },
  ],

  wrapperClass = "",
  gridClass = "grid lg:grid-cols-4 grid-cols-2 gap-[50px]",
}) => {
  return (
    <div className={`success-stories-metrics-block ${wrapperClass}`}>
      <Container variant="blockSpacing">
        <SectionHeader title={title} subtitle={subtitle} align={align} />

        <Container variant="topSpacing" className={gridClass}>
          {metrics.map((item, index) => (
            <Metric key={index} number={item.number} label={item.label} />
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default SuccessStoriesMetrics;
