import React from 'react';
import { Inject } from '@syncfusion/ej2-react-charts';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { ColumnsDirective } from '@syncfusion/ej2-react-charts';
import { GridComponent, Sort, ContextMenu, Resize, Filter, Page } from '@syncfusion/ej2-react-grids';
import { ExcelExport } from '@syncfusion/ej2-react-grids';
import { Edit } from '@syncfusion/ej2-react-grids';
import { PdfExport } from '@syncfusion/ej2-react-grids';



const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders;