import IconComprar from "../../icons/iconComprar";
import { ProdutoIO } from "../produtos";
import styles from "./style.module.scss";

export default function CardProduto({ produto, setCountItens }: Props) {
  return (
    <div className={styles.produto_container}>
      <div className={styles.info_produto}>
        <img
          src={produto.photo}
          alt={`foto_produto`}
          width={120}
          height={120}
        />
        <div className={styles.name_price_wrapper}>
          <span className={styles.name}>{produto.name}</span>
          <span className={styles.price}>{produto.price}</span>
        </div>
        <span>{produto.description}</span>
      </div>
      <button
        className={styles.button_comprar}
        onClick={() => setCountItens((prev) => prev + 1)}
      >
        Comprar
      </button>
    </div>
  );
}

type Props = {
  produto: ProdutoIO;
  setCountItens: React.Dispatch<React.SetStateAction<number>>;
};
