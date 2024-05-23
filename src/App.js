import React from 'react';

import 'antd/dist/reset.css';  
import MainTable from './MainTable';

const App = () => (
  <div style={{ padding: 24 }}>
    <h1>ML Engineer Salaries (2020-2024)</h1>
    <MainTable />
  </div>
);

export default App;
