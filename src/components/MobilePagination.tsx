import { useGiphy } from "@hooks/index";

const MobilePagination = () => {
  const { handlechangePage, page } = useGiphy();
  return (
    <div className="flex flex-1 justify-between sm:hidden">
      {page > 0 && (
        <a
          onClick={() => handlechangePage(-1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Previous
        </a>
      )}
      <a
        onClick={() => handlechangePage(1)}
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50"
      >
        Next
      </a>
    </div>
  );
};

export default MobilePagination;
