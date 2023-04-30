/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
  <div className="card shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-500 ease-in-out">
  <div>
  <Link href={`/product/${product.slug}`}>
    <img
      src={product.image}
      alt={product.name}
      className="rounded-t-md h-56 w-full object-cover"
    />
        </Link>
        </div>
  <div className="flex flex-col  items-center justify-center ">
  <div className="flex space-x-4 ">
    <Link href={`/product/${product.slug}`}>
      <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary transition duration-300 ease-in-out">
        {product.name}
      </h2>
    </Link>
          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          <div />
    <p className="text-xl font-bold text-primary mb-4">KSH{product.price}</p>
  </div>
</div>

</div>

  );
}
