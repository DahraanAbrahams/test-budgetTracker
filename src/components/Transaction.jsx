import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { MdDescription, MdCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Transaction";
import { useDispatch } from "react-redux";
import typeIcons from "../utils/typeIcons";
import moment from "moment";
import {
  deleteTransaction,
  setEditTransaction,
} from "../features/transaction/transactionSlice";

const Transaction = ({
  _id,
  description,
  amount,
  type,
  createdAt }) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">
          {typeIcons.map((typeItem) => {
            if (typeItem.type === type) {
              return (
                <img
                  key={typeItem.id}
                  src={typeItem.icon}
                  alt="icon of type transaction"
                />
              );
            }
          })}
        </div>
        <div className="info">
          <h3>${amount}</h3>
          <p>{type}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="description">
            <MdDescription size={25} />
            <span>{description}</span>
          </div>
          <div className="createdAt">
            <MdCalendarMonth size={25} />
            <span>{date}</span>
          </div>
          {/* <h6>{ createdAt}</h6> */}
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-transaction"
              className="btn edit-btn"
              onClick={() => {
                dispatch(
                  setEditTransaction({
                    editTransactionId: _id,
                    description,
                    amount,
                    type,
                  })
                );
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                dispatch(deleteTransaction(_id));
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Transaction;
