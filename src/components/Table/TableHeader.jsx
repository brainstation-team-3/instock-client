import sortIcon from '@assets/icons/sort-24px.svg'

const TableHeader = ({columns}) => {
  return (
    <div>
      <div className="hidden px-6 md:grid md:grid-cols-5 md:justify-start md:px-10 md:py-2 md:text-sm md:shadow-md">
        {columns.map((column, index) => (
          <span key={index} className="flex items-center gap-1 last:justify-end">
            <p className="text-sm lg:text-base min-w-fit font-bold uppercase text-instock-slate">{column}</p>
            <img className="w-4 cursor-pointer" src={sortIcon} alt="sort-icon"/>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
