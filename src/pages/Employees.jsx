import React from 'react';
import { Inject } from '@syncfusion/ej2-react-charts';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { ColumnsDirective } from '@syncfusion/ej2-react-charts';
import { Search, ExcelExport, GridComponent, Page, Toolbar } from '@syncfusion/ej2-react-grids';



const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Search, ExcelExport, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees;