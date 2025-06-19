import { Button } from "@/components/ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8 gap-2">
      {[1, 2, 3, 4].map((page) => (
        <Button key={page} variant="outline" className="h-8 w-8 p-0 rounded">
          {page}
        </Button>
      ))}
      <span className="text-sm text-gray-500">... 28</span>
    </div>
  );
};

export default Pagination;
