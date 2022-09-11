import { useGiphySWR } from "@hooks/index";

const PageButtons = () => {
  const { page, mutatePage } = useGiphySWR();
  return (
    <>
      {page > 0 && (
        <a
          onClick={() => mutatePage(-1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-neutral-900 mx-2 px-4 py-2 text-sm font-medium hover:bg-gray-50 cursor-pointer"
        >
          Previous
        </a>
      )}
      <a
        onClick={() => mutatePage(1)}
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-neutral-900 px-5 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20"
      >
        Next
      </a>
    </>
  );
};

export default PageButtons;
