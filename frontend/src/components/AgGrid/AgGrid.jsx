import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import classNames from "classnames";
import "ag-grid-community/dist/styles/ag-grid.css";

import "../../sass/aggrid.scss";

export default function AgGrid({ rowData = [] }) {
  const { push } = useHistory();
  const { url } = useRouteMatch();

  const [gridApi, setGridApi] = useState(null);

  function onGridReady(params) {
    setGridApi(params.api);
  }

  function onSelectionChanged() {
    const assetId = gridApi.getSelectedRows()[0].id;
    push(`${url}/${assetId}/taskquicklook`);
  }

  return (
    <div
      className={classNames("ag-theme-alpine-dark", "tableStyles")}
      style={{ height: "350px", width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        rowSelection="single"
        rowDragManaged={true}
        onGridReady={onGridReady}
        onSelectionChanged={onSelectionChanged}
      >
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
}
