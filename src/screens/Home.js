import React, { useState } from 'react';
import { Header, Configs, Drawer } from '../components/index';

// import { Container } from './styles';

export default function Home() {

  const [rows, setRows] = useState(32);
  const [columns, setColumns] = useState(32);

  const handleRowsChange = value => setRows(value);
  const handleColumnsChange = value => setColumns(value);

  return (
    <>
      <Header />
      <Configs rows={rows} columns={columns} rowsChange={handleRowsChange} columnsChange={handleColumnsChange} />
      <Drawer rows={rows} columns={columns} />
    </>
  );
}
