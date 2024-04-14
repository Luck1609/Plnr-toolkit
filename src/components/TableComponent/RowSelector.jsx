

export default function RowSelector({ rows, selectedRows }) {
  console.log("selected row opitions", selectedRows)
  return selectedRows?.component(rows);
}
