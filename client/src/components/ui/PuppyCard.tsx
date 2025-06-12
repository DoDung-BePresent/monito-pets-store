interface PuppyCardProps {
  image: string;
  sku: string;
  name: string;
  gender: string;
  age: string;
  price: string;
}

const PuppyCard = ({ image, sku, name, gender, age, price }: PuppyCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
      <img src={image} alt={name} className="aspect-square w-full object-cover" />
      <div className="space-y-1 px-4 py-3">
        <h4 className="text-sm font-semibold text-[#003459]">
          {sku} - {name}
        </h4>
        <p className="text-xs text-gray-500">
          Genre: {gender} &nbsp;&nbsp; • &nbsp;&nbsp; Age: {age}
        </p>
        <p className="text-sm font-bold text-[#003459]">{price}</p>
      </div>
    </div>
  );
};

export default PuppyCard;
