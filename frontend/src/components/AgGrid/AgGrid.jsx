import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import classNames from 'classnames';
import 'ag-grid-community/dist/styles/ag-grid.css';

import "../../sass/aggrid.scss"

export default function AgGrid({rowData = []}) {
   return (
       <div className={classNames("ag-theme-alpine-dark", "tableStyles")} style={{height: "100%", width: "100%"}}>
           <AgGridReact rowData={rowData}>
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
