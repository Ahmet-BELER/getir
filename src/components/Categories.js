import { useState, useEffect } from "react";
import data from "../api/categories.json";

import Category from "./ui/Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return (
    <div className="py-6 bg-purple-50 md:bg-white">
      <div className="container mx-auto font-semibold py-4">
       


        Categories 
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">

          {categories &&
            categories.map((category, id) => {
              return <Category key={id} category={category} />;
            })}
        </div>
      </div>
    </div>
  );
}