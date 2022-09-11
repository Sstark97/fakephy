import { useGlobalContext } from "@hooks/index";
import PageButtons from "./PageButtons";

const DesktopPagination = () => {
  const { count, result } = useGlobalContext();
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
          <PageButtons />
        </nav>
      </div>
    </div>
  );
};

export default DesktopPagination;
