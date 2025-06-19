interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  size?: string;
  price: string;
  badge: string;
}

export const ProductCard = ({
  image,
  title,
  category,
  size,
  price,
  badge,
}: ProductCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-3 shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
        <img src={image} alt={title} className="h-full w-full object-contain" />
      </div>
      <div className="mt-3 space-y-1">
        <h4 className="text-sm font-semibold text-[#242B33]">{title}</h4>
        <p className="text-xs text-gray-500">
          Product: {category}
          {size && <> • Size: {size}</>}
        </p>
        <p className="text-sm font-bold text-[#242B33]">{price}</p>
        <div className="mt-2 flex w-full items-center justify-center gap-1 rounded-md bg-[#FFF0D0] px-2 py-2 text-xs font-semibold text-[#003459]">
          🎁 {badge}
        </div>
      </div>
    </div>
  );
};
