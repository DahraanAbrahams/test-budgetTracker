import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";
import {
  handleChange,
  clearValues,
  createTransaction,
  editTransaction
} from "../../features/transaction/transactionSlice";

const AddTransaction = () => {
  const {
    isLoading,
    isEditing,
    editTransactionId,
    description,
    typeOptions,
    type,
    amount,
  } = useSelector((store) => store.transaction);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !type) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editTransaction({
          transactionId: editTransactionId,
          transaction: {
            description,
            amount,
            type,
          },
        })
      );
      return;
    }
    dispatch(createTransaction({ description, amount, type }));
  };
  const handleTransactionInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit transaction" : "add transaction"}</h3>

        <div className="form-center">
          {/* description */}
          <FormRow
            type="text"
            name="description"
            value={description}
            handleChange={handleTransactionInput}
          />
          {/* amount */}
          <FormRow
            type="number"
            name="amount"
            value={amount}
            handleChange={handleTransactionInput}
          />
          {/* transaction type */}
          <FormRowSelect
            name="type"
            value={type}
            handleChange={handleTransactionInput}
            list={typeOptions}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddTransaction;
