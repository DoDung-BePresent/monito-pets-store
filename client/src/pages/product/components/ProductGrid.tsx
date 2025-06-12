import PetCard from '@/components/ui/PetCard';

const dummyProducts = Array(12).fill({
  id: 'MO231',
  image: '/images/puppy1.jpg',
  name: 'Poodle Tiny Yellow',
  gene: 'Male',
  age: '02 months',
  price: '3.900.000 VND',
});

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {dummyProducts.map((product, index) => (
        <PetCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
