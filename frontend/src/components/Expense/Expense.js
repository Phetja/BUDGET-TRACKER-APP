import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Expense() {
  const { expenses, getExpense, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpense();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expense</h1>
        <Row>
          <Col md={12}>
            {' '}
            <h2 className="total-income">
              Total Expense: <span>{totalExpense()}฿</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <ExpenseForm />{' '}
          </Col>
          <Col xs={12} md={8}>
            <div className="incomes">
              {expenses.map((income) => {
                const {
                  _id,
                  title,
                  amount,
                  date,
                  category,
                  description,
                  type,
                } = income;
                return (
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpense}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  .incomes {
    flex: 1;
  }
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
  @media screen and (max-width: 750px) {
    .total-income {
      span {
        font-size: 1.5srem;
        font-weight: 600;
        color: var(--color-green);
      }
    }
  }
`;

export default Expense;
