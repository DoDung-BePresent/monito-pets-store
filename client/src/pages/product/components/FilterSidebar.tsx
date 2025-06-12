import { Checkbox } from "@/components/ui/checkbox";

const FilterSidebar = () => {
  return (
    <aside className="space-y-6">
      <div>
        <h4 className="font-bold mb-2">Gender</h4>
        {["Male", "Female"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Checkbox id={item} />
            <label htmlFor={item} className="text-sm">{item}</label>
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-bold mb-2">Breed</h4>
        {["Poodle", "Corgi", "Shiba", "Husky"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Checkbox id={item} />
            <label htmlFor={item} className="text-sm">{item}</label>
          </div>
        ))}
      </div>
      <div>
        <h4 className="font-bold mb-2">Size</h4>
        {["Small", "Medium", "Large"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <Checkbox id={item} />
            <label htmlFor={item} className="text-sm">{item}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
