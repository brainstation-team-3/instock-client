import sortIcon from '@assets/icons/sort-24px.svg'

const WarehouseTableHeader = ({columns}) => {
  return (
    <div>
      <div className="hidden px-6 md:grid md:grid-cols-5 md:justify-start md:py-2 md:shadow-md md:text-sm">
        {columns.map((column, index) => (
          <span key={index} className="flex gap-1 items-center last:justify-end">
            <p className="font-bold uppercase text-instock-slate min-w-fit">{column}</p>
            <img className="w-4" src={sortIcon} alt="sort-icon"/>
          </span>
        ))}
      </div>
    </div>
  );
};

export default WarehouseTableHeader;
