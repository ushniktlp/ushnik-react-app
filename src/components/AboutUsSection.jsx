const AboutUsSection = ({ data }) => {
  return (
    <section id="about-us-section" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE */}
          <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0 text-center">
            {data.image && (
              <a
                href={data.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="img-fluid rounded about-image shadow-sm"
                />
              </a>
            )}
          </div>

          {/* TEXT CONTENT */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="about-content">
              {data.title && (
                <h1 className="mb-3 text-center">
                  {data.titleLink ? (
                    <a
                      style={{
                        color: "#000",
                        textDecoration: "none",
                      }}
                      href={data.titleLink}
                    >
                      {data.title}
                    </a>
                  ) : (
                    data.title
                  )}
                </h1>
              )}

              {data.paragraphs?.map((text, index) => (
                <p key={index} className="mb-3">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
