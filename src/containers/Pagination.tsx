import DesktopPagination from "@components/DesktopPagination";
import MobilePagination from "@components/MobilePagination";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-neutral-900 px-4 py-3 sm:px-6 text-white h-[10%]">
      <MobilePagination />
      <DesktopPagination />
    </div>
  );
};

export default Pagination;
