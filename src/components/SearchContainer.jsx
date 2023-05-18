import { FormRow, FormRowSelect } from './';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilters } from '../features/allTransactions/allTransactionsSlice';
import { useMemo, useState } from 'react';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
  const { isLoading, search, type, sort, sortOptions } = useSelector((store) => store.allTransactions);
  const { typeOptions } = useSelector((store) => store.transaction);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
      dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search by description */}
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by type */}
          <FormRowSelect
            labelText='type'
            name='type'
            value={type}
            handleChange={handleSearch}
            list={['all', ...typeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;