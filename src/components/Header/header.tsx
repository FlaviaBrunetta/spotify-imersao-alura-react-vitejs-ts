import './header.css';
import SmallLeft from "../../assets/icons/small-left.png";
import SmallRight from "../../assets/icons/small-right.png";
import SearchIcon from "../../assets/icons/search.png";

export const Header = () => {
  return (
    <nav className="navigation__header">
      <div className="navigation">
        <button className="arrow-left">
          <img src={SmallLeft} alt="seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={SmallRight} alt="seta direita" />
        </button>
      </div>
      <div className="search__header">
        <img src={SearchIcon} alt="" />
        <input
          id="search-input"
          type="text"
          maxLength={800}
          placeholder="O que você quer ouvir?"
        />
      </div>

      <div className="login__header">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  )
}