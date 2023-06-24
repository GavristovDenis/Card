import "./secondPage.scss";
export const SecondPage = () => {
  return (
    <div className="second_page">
      <div className="list">
        <ul>
          <li>Имя: Денис Гавристов</li>
          <li>Возраст: 22 года</li>
          <li>День рождения: 08.09.2000</li>
          <li>Род занятий: музыкант, переводчик, Web-разработчик</li>
        </ul>
      </div>
      <img
        className="image"
        src="https://sun9-east.userapi.com/sun9-22/s/v1/ig2/_iXl8AgOAwImYEewFmfSZzCnP0rWJfcUjJLw17dWdKEC9BCkQgI9UMlyCDoJnUawdgk3ZQ0QPaCTaRSWlvDQa0N9.jpg?size=1440x1440&quality=95&type=album"
      ></img>
    </div>
  );
};
