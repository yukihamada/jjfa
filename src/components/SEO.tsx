import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords = "柔術,JJFA,Jiu-Jitsu,大会,トーナメント,コミュニティ,教育",
  image = "https://jjfa.com/OGP.png",
  url = "https://jjfa.com"
}: SEOProps) => {
  const fullTitle = `${title} | JJFA - 柔術 for ALL`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content="JJFA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@JJFA_official" />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};