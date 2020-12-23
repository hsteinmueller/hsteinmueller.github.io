import dynamic from "next/dynamic";
import React from "react";
import Layout from "../components/layout";
import { getPdfFromGithub } from "./api/pdf";

const PdfViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false,
});

export default function Resume({ b64 }) {
  return (
    <Layout title="Résumé">
      <PdfViewer pdf={"data:application/pdf;base64," + b64} />
    </Layout>
  );
}

// build time
export async function getStaticProps(context) {
  const b64 = await getPdfFromGithub();
  return {
    props: {
      ...b64,
    },
  };
}

// each request
// export async function getServerSideProps(context) {
//   const b64 = await getPdfFromGithub();
//   return {
//     props: {
//       ...b64,
//     },
//   };
// }
