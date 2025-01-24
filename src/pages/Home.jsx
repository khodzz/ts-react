import React, { useState, useEffect, useContext } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleteon from "../components/PizzaBlock/Skeleteon";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState(
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" }
  );

  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://6778cc93482f42b62e8f999f.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []); // Проверка, что data — массив
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas =
    items.length > 0
      ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
      : null;

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleteon key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzas ? pizzas : <p>Пиццы не найдены</p>}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
