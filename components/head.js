import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();

  return (
    <Head>
      <title>"Student Profiles"</title>
      {/* mobile devices by default takes the content from desktop and squueze it. But we want it to be responsive */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* First line of result when somoene searches your page */}
      <meta
        name="description"
        key="description"
        content="Students App Meta Description"
      />
      <meta name="title" key="title" content="Student Profiles" />
      <meta property="og:title" key="og:title" content="Student Profiles" />
      <meta property="og:locale" key="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta
        property="og:url"
        key="og:url"
        content={`${process.env.BASE_URL}${router.asPath}`}
      />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content="Students App Meta Description"
      />
      <meta
        property="og:image"
        key="og:image"
        content={`${process.env.BASE_URL}/logo.png`}
      />

      <meta name="theme-color" content="#317EFB" />

      <link
        href="https://fonts.googleapis.com/css2?family=Alice&family=Great+Vibes&family=Inconsolata&family=Indie+Flower&family=Lobster&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <script
        src="https://kit.fontawesome.com/fbadad80a0.js"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
