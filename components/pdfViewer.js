import styles from "../styles/PdfViewer.module.css";

const PdfViewer = ({ pdf }) => {
  return (
    <object
      className={styles.object}
      type="application/pdf"
      data={pdf + "#view=Fit"}
    >
      <p>Looks like your browser doesn't have a PDF plugin.</p>
      <p>
        Click{" "}
        <a href={pdf} download>
          HERE
        </a>{" "}
        to download the file instead.
      </p>
    </object>
    // data="/resume_en.pdf#view=Fit"
  );
};

export default PdfViewer;
