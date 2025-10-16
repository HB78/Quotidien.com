"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center">
      <nav className="bg-white rounded-2xl shadow-lg p-3 border border-gray-100 inline-flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2.5 rounded-xl transition-all duration-200 ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`min-w-[2.5rem] h-10 rounded-xl font-semibold text-sm transition-all duration-200 ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-110"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2.5 rounded-xl transition-all duration-200 ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
