"use client";

import { categories } from "@/data/categories";
import { Filter } from "lucide-react";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-50 p-2 rounded-lg">
          <Filter className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">Catégories</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md hover:shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
