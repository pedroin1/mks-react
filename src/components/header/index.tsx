import IconShop from "../../icons/iconShop";
import styles from "./style.module.scss";

export default function HeaderComponent({ countItens }: Props) {
  return (
    <header className={styles.header_container}>
      <div className={styles.title_container}>
        <h1>MKS</h1>
        <span>Sistemas</span>
      </div>
      <div className={styles.icon_container}>
        <IconShop />
        <p>{countItens}</p>
      </div>
    </header>
  );
}

type Props = {
  countItens: number;
};
