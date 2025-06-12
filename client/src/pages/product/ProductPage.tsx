import Banner from './components/Banner';
import FilterSidebar from './components/FilterSidebar';
import Pagination from './components/Pagination';
import ProductGrid from './components/ProductGrid';

const ProductPage = () => {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">
      <Banner />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <FilterSidebar />
        </aside>

        <section className="space-y-6 lg:col-span-3">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold leading-[36px] text-[#003459]">
              Small Dog
            </h2>
            <span className="text-[14px] leading-[20px] font-medium text-[#003459]/80">
              52 puppies
            </span>
          </div>

          <ProductGrid />
          <Pagination />
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
