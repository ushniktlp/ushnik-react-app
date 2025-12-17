import { Helmet } from "react-helmet-async";

const SITE_URL = "https://demo.ushnik.in";

const SEOComp = ({
  title = "Ushnik Technologies",
  description = "Ushnik Technologies - IT training, internships and placements.",
  keywords,
  canonical,
  path = "/",
  image,
  type = "website",
  robots = "index,follow",
}) => {
  const url = canonical || `${SITE_URL}${path}`;
  const imageUrl = image || `${SITE_URL}/U.png`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

    </Helmet>
  );
};

export default SEOComp;

