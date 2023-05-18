import { useEffect } from 'react';
import Transaction from './Transaction';
import Wrapper from '../assets/wrappers/TransactionsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllTransactions } from '../features/allTransactions/allTransactionsSlice';
import PaginationContainer from './PaginationContainer';

const TransactionsContainer = () => {
  const { transactions, isLoading, page, totalTransactions, numOfPages, search, type, sort} = useSelector((store) => store.allTransactions);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllTransactions());
  }, [page, search, type, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (transactions.length === 0) {
    return (
      <Wrapper>
        <h2>No transactions to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{ totalTransactions } transactions found</h5>
      <div className='transactions'>
        {transactions.map((transaction) => {
          return <Transaction key={transaction._id} {...transaction} />;
        })}
      </div>
      { numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};

export default TransactionsContainer;