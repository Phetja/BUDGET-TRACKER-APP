import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/icons';
import { useGlobalContext } from '../../context/GlobalContext';
import History from '../../History/History';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Dashboard() {
  const {
    totalExpense,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpense,
    incomes,
    expenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpense();
  }, []);
  return (
    <DashboardStyle>
      <InnerLayout>
        <Container>
          <h1>All Transaction</h1>
          <Row>
            <Col xs={12} md={8}>
              <div className="chart-con">
                <Chart />
              </div>
              <Row>
                <Col xs={12} md={6}>
                  <div className="income">
                    <h3>Total Income</h3>
                    <p>
                      {dollar} {totalIncome()}
                    </p>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="expense">
                    <h3>Total Expense</h3>
                    <p>
                      {dollar} {totalExpense()}
                    </p>
                  </div>
                </Col>
              </Row>

              <div className="balance">
                <h3>Total Balance</h3>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <History />
              <h4 className="salary-title">
                Min <span>Salary</span>Max
              </h4>
              <div className="salary-item">
                <p>${Math.min(...incomes.map((item) => item.amount))}</p>
                <p>${Math.max(...incomes.map((item) => item.amount))}</p>
              </div>
              <h4 className="salary-title">
                Min <span>Expense</span>Max
              </h4>
              <div className="salary-item">
                <p>${Math.min(...expenses.map((item) => item.amount))}</p>
                <p>${Math.max(...expenses.map((item) => item.amount))}</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <h1>All Transaction</h1>
        <div className="stats-con">
          <div className="chart-con">
            <div className="chart-display">
              <Chart />
            </div>
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div> */}
      </InnerLayout>
    </DashboardStyle>
  );
}

const DashboardStyle = styled.div`
  .income,
  .expense,
  .balance {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem;
  }
  .income,
  .expense,
  .balance p {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    margin: 0;
  }
  .salary-title {
    padding-top: 1rem;
  }
  .salary-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
  }
  .salary-title,
  .salary-item {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) and (min-width: 500px) {
    .chart-con {
      display: none;
    }
    .income,
    .expense,
    .balance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem;
      padding: 1 rem;
    }
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0rem;
    }
    .income,
    .expense,
    .balance p {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 490px) {
    .chart-con {
      display: none;
    }
    .income,
    .expense,
    .balance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem;
      padding: 0.5 rem;
    }
  }
`;

export default Dashboard;
