import "./header.scss";
import { Link, Route, Router, Routes } from "react-router-dom";
import { FirstPage } from "./firstPage";
import { ThridPage } from "./thirdPage";
import { SecondPage } from "./secondPage";
import { Footer } from "./footer";
export const Header = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/secondPage"}>
          <button>Обо мне</button>
        </Link>
        <Link to={"/thirdPage"}>
          <button>Опыт работы</button>
        </Link>
        <Link to={"/footer"}>
          <button>Ссылки</button>
        </Link>
      </div>
    </div>
  );
};
