"use client";

import React, { useState, useEffect } from "react";
import Container  from "./spacing";
import SectionHeader from "./sectionHeader";
import Typography from "./typography";

export default function ContactOurOffices({
  label = "Our Offices",
  title = "Visit Us Worldwide",
  subtitle = "We have offices around the globe to serve you better",
  offices = [],
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      <Container variant="primary">
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          align={isMobile ? "left" : "center"}
        />

        <div className="offices-grid">
          {offices.map((office, index) => (
            <div className="office-card" key={index}>
              <div className="office-card__header">
                <Typography variant="h3" className="office-card__city">
                  {office.city}
                </Typography>

                <Typography variant="body-4" className="office-card__label">
                  {office.label}
                </Typography>
              </div>

              <div className="office-card__body">
                <div className="office-card__address">
                  {office.address?.map((line, i) => (
                    <Typography key={i} variant="body-4">
                      {line}
                    </Typography>
                  ))}
                </div>

                <Typography variant="body-4" className="office-card__phone">
                  {office.phone}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

