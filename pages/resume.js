import dynamic from "next/dynamic";
import React from "react";

import { getPdfFromGithub } from "./api/pdf";
import Layout from "../components/layout";

const PdfViewer = dynamic(() => import("../components/pdfViewer"), {
  ssr: false,
});

export default function Resume({ b64 }) {
  return (
    <Layout>
      <PdfViewer pdf={"data:application/pdf;base64," + b64} />
    </Layout>
  );
}

// build time
// export async function getStaticProps(context) {
//   const b64 = await getPdfFromGithub();
//   return {
//     props: {
//       ...b64,
//     },
//   };
// }

// each request
export async function getServerSideProps(context) {
  const b64 = await getPdfFromGithub();
  return {
    props: {
      ...b64,
    },
  };
}
