import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Shikha Soni | RCI Licensed Clinical Psychologist | Bengaluru & Online",
  description:
    "Dr. Shikha Soni, Ph.D. (IIT Hyderabad), RCI Licensed Clinical Psychologist offering evidence-based therapy in Bengaluru and online. Specializing in CBT, Positive Psychology, resilience, anxiety, depression, OCD, grief, and queer-affirmative care.",
  metadataBase: new URL("https://shikhasoni.in"),
  alternates: { canonical: "https://shikhasoni.in" },
  openGraph: {
    title: "Dr. Shikha Soni | Clinical Psychologist | Bengaluru",
    description:
      "RCI Licensed Clinical Psychologist with 1479+ sessions. CBT, Positive Psychology, grief & resilience therapy in Bengaluru and online.",
    url: "https://shikhasoni.in",
    siteName: "Dr. Shikha Soni",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shikha Soni | Clinical Psychologist",
    description:
      "RCI Licensed Clinical Psychologist. Evidence-based therapy for anxiety, depression, OCD, grief & more.",
  },
  robots: { index: true, follow: true },
  category: "Healthcare Professional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}var b=document.createElement('button');b.id='dark-toggle';b.setAttribute('aria-label','Toggle dark mode');function up(){var d=document.documentElement.classList.contains('dark');b.className=d?'dark':'light';b.textContent=d?'☀️':'🌙'}up();b.onclick=function(){document.documentElement.classList.toggle('dark');try{localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){}up()};document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(b)})})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Dr. Shikha Soni — Clinical Psychologist",
              description:
                "RCI Licensed Clinical Psychologist offering evidence-based therapy in Bengaluru and online. Specializing in CBT, Positive Psychology, resilience, anxiety, depression, OCD, grief, and queer-affirmative care.",
              url: "https://shikhasoni.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              provider: {
                "@type": "Person",
                name: "Dr. Shikha Soni, Ph.D.",
                honorificPrefix: "Dr.",
                givenName: "Shikha",
                additionalName: "Soni",
                hasCredential: {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "RCI Licensed Clinical Psychologist",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Rehabilitation Council of India",
                  },
                },
                alumniOf: [
                  {
                    "@type": "CollegeOrUniversity",
                    name: "IIT Hyderabad",
                  },
                  {
                    "@type": "CollegeOrUniversity",
                    name: "Central Institute of Psychiatry, Ranchi",
                  },
                  {
                    "@type": "CollegeOrUniversity",
                    name: "Daulat Ram College, University of Delhi",
                  },
                ],
                knowsAbout: [
                  "Cognitive Behavioral Therapy (CBT)",
                  "Positive Psychology",
                  "Resilience and Flourishing",
                  "Grief Counseling",
                  "OCD Treatment",
                  "Queer-Affirmative Therapy",
                  "Couple and Family Therapy",
                  "Anxiety and Depression",
                ],
                jobTitle: "Clinical Psychologist",
                worksFor: {
                  "@type": "Organization",
                  name: "Private Practice",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Bengaluru",
                    addressCountry: "IN",
                  },
                },
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}