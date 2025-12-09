"use client"
import React from "react";
import { MainCategory } from "@/features/category/components/MainCategory.jsx";
import useCategoryStore from "@/features/category/categoryStore";

export function CategoryMenu() {
  const categoryList = useCategoryStore((s) => s.categoryList)

  return (
    
    <ul className="main-category-list">
      
      {categoryList?.map((main) => (
        <MainCategory key={main.id} main={main} />
      ))}
    </ul>
  );
}
