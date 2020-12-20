import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import styles from "../styles/PdfViewer.module.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
      <div className={styles.controls}>
        <button onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}>
          &larr;
        </button>
        <span>
          {pageNumber} of {numPages}
        </span>
        <button
          onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
        >
          &rarr;
        </button>
        <a
          download={"resume-hsteinmueller"}
          href={pdf}
          title="Download resume as pdf"
        >
          <FaDownload />
        </a>
      </div>
    </Document>
  );
};

export default PdfViewer;
