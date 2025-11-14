import React from "react";
import ProductList from "../components/ProductList";
import ProductCategory from "../components/ProductCategory";
import { useParams } from "@tanstack/react-router";

export default function CataloguePage() {
  const params = useParams({ strict: false });

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Catalogue
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          Parcourez notre sélection de produits
        </p>
      </div>
      {params?.name ? <ProductCategory /> : <ProductList />}
    </div>
  );
}
