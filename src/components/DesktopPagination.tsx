import { useGiphy } from "@hooks/index";
import { ReactComponent as Next } from "@assets/next.svg";
import { ReactComponent as Previous } from "@assets/prev.svg";

const DesktopPagination = () => {
  const { handlechangePage, count, result, page } = useGiphy();
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm">
          Showing
          <span className="font-medium mx-1">{count}</span>
          of
          <span className="font-medium mx-1">{result}</span>
          results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {page > 0 && (
            <a
              onClick={() => handlechangePage(-1)}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Previous
            </a>
          )}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20"
          >
            10
          </a>
          <a
            href="#"
            onClick={() => handlechangePage(1)}
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-neutral-900 px-2 py-2 text-sm font-medium hover:bg-gray-50 focus:z-20"
          >
            <span className="sr-only ">Next</span>
            <Next className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DesktopPagination;
