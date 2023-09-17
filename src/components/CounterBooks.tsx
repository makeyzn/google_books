import { BooksState } from "../features/asyncAllBooksSlice";

const Counter = ({ totalItems }: Pick<BooksState, "totalItems">) => {
  return (
    <div className="mt-3">
      <h5>Found {totalItems} results</h5>
    </div>
  );
};

export default Counter;
