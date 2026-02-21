"use client";

import Image from "next/image";
import Label from "./lable";
import Card from "./value";
import Typography from "./typography";
import Container from "./spacing";

export default function StoryCard({
  // TOP INFO
  category,
  title,
 

  // HERO IMAGE
  heroImage,
  heroImageAlt = "story image",

  // QUOTE
  quote,
  quoteIcon = "https://ik.imagekit.io/75zj3bigp/Icon%20(2).png",
  authorName,
  authorRole,

  // METRICS
  metrics = [], // [{ value: "65%", label: "Faster Hiring", iconSrc }]
  defaultMetricIcon ,

  // CHALLENGE
  challengeTitle,
  challengeDescription,

  // SOLUTION
  solutionTitle,
  solutionDescription,

  // CTA
  ctaText,
  onCtaClick,
}) {
  return (
    
    <Container variant="primary">
    <Container className='flex justify-center' variant="topSpacing">
    <article className="story-card">
      {/* HERO IMAGE */}
      {heroImage && (
        <div className="story-card__media">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            width={1280}
            height={640}
            className="story-card__media-img"
          />
        </div>
      )}

      <div className="story-card__body">
        {/* HEADER */}
        <div className="story-card__header">
          {category && <Label text={category} className="story-card__label" />}

          {title && (
            <Typography variant="h2" className="story-card__title">
              {title}
            </Typography>
          )}

         
        </div>

        {/* QUOTE SECTION */}
        {(quote || authorName || authorRole) && (
          <div className="story-card__quote">
            {quoteIcon && (
              <Image
                src={quoteIcon}
                alt=""
                width={32}
                height={32}
                className="story-card__quote-icon"
              />
            )}

            {quote && (
              <Typography variant="body-3" className="story-card__quote-text">
                {quote}
              </Typography>
            )}

            {(authorName || authorRole) && (
              <div className="story-card__quote-author">
                {authorName && (
                  <Typography variant="h6" className="story-card__quote-name">
                    {authorName}
                  </Typography>
                )}
                {authorRole && (
                  <Typography
                    variant="body-4"
                    className="story-card__quote-role"
                  >
                    {authorRole}
                  </Typography>
                )}
              </div>
            )}
          </div>
        )}

        {/* METRICS - ALL DYNAMIC */}
        {metrics?.length > 0 && (
          <div className="story-card-container">
            {metrics.map((metric, i) => (
              <Card
                key={i}
                title={metric.value}
                description={metric.label}
                iconSrc={metric.iconSrc || defaultMetricIcon}
                variant="story"
              />
            ))}
          </div>
        )}

        {/* CHALLENGE SECTION */}
        {(challengeTitle || challengeDescription) && (
          <div className="story-card__section">
            {challengeTitle && (
              <Typography variant="h4" className="story-card__section-title">
                {challengeTitle}
              </Typography>
            )}

            {challengeDescription && (
              <Typography variant="body-4" className="story-card__section-copy">
                {challengeDescription}
              </Typography>
            )}
          </div>
        )}

        {/* SOLUTION SECTION */}
        {(solutionTitle || solutionDescription) && (
          <div className="story-card__section">
            {solutionTitle && (
              <Typography variant="h4" className="story-card__section-title">
                {solutionTitle}
              </Typography>
            )}

            {solutionDescription && (
              <Typography variant="body-4" className="story-card__section-copy">
                {solutionDescription}
              </Typography>
            )}
          </div>
        )}

       
      </div>
    </article>
    </Container>
    </Container>
  );
}
