import * as React from "react";
import {Link, Outlet} from 'react-router-dom'

const App = () =>{
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to='/invoices'>INVOICES</Link> | {' '}
        <Link to='/expenses'>EXPENSES</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
export default App