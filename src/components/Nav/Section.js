import styles from "../../css/Section.module.css";

export default function Section({ id, children }) {
  const className = `${styles.section}`;

  return (
    <Section id={id} className={className}>
      {children}
    </Section>
  );
}
