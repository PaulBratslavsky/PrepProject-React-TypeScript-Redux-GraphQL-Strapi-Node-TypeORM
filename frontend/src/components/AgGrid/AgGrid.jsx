import { useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import classNames from 'classnames';
import 'ag-grid-community/dist/styles/ag-grid.css';

import "../../sass/aggrid.scss"

export default function AgGrid({rowData = []}) {

    const [gridApi, setGridApi] = useState(null)

    function onGridReady(params) {
      console.log(params.api, "test")
      setGridApi(params.api)
    }

    function getSelectedRowData() {
      const selectedRow = gridApi.getSelectedRows()[0];
      console.log(selectedRow)
    };

    console.log(gridApi, "FROM STATE")

   return (
       <div className={classNames("ag-theme-alpine-dark", "tableStyles")} style={{height: "100%", width: "100%"}}>
         <button onClick={getSelectedRowData}>console log row selected</button>
           <AgGridReact rowData={rowData} rowSelection="single" rowDragManaged={true} onGridReady={onGridReady} >
               <AgGridColumn field="name"></AgGridColumn>
               <AgGridColumn field="type"></AgGridColumn>
               <AgGridColumn field="status"></AgGridColumn>
               <AgGridColumn field="completed"></AgGridColumn>
               <AgGridColumn field="dueDate"></AgGridColumn>
               <AgGridColumn field="assignee"></AgGridColumn>
               <AgGridColumn field="created by"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};
