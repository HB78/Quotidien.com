"use client";

import { sortOptions } from "@/data/sortBooksOptions";
import { Search, ArrowUpDown } from "lucide-react";

const SearchAndSort = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recherche */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rechercher
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Titre ou description..."
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Tri */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Trier par
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ArrowUpDown className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;
