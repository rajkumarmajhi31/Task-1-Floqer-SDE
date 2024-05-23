import React from 'react';
import { Table } from 'antd';
import { salaryData } from './data';
import './MainTable.css'; // Import the CSS file

const MainTable = () => {
  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: 'Number of Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary in USD',
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={salaryData}
      rowKey="year"
      className="custom-table" // Apply custom class name
    />
  );
};

export default MainTable;
