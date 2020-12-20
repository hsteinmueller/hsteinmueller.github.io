import styles from "../styles/PdfViewer.module.css";

const PdfViewer = ({ pdf }) => {
  return (
    <object
      className={styles.object}
      type="application/pdf"
      data={pdf + "#view=Fit"}
      // data="/resume_en.pdf#view=Fit"
    />
  );
};

export default PdfViewer;
