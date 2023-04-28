import sortIcon from '@assets/icons/sort-24px.svg'

const TableHeader = ({columns}) => {

  return (
      <div className={`
      hidden px-6 bg-instock-light-grey/70 md:grid md:justify-start md:px-10 md:py-2 md:text-sm
      md:grid-cols-${columns.length}
      `}>
        {columns.map((column, index) => (
          <span key={index} className="flex items-center gap-1 last:justify-end">
            <p className="min-w-fit text-sm font-bold uppercase text-instock-slate lg:text-base">{column}</p>
            <img className="w-4 cursor-pointer" src={sortIcon} alt="sort-icon"/>
          </span>
        ))}
      </div>
  );
};

export default TableHeader;
