export default function RowSelector({ rows, options }) {
  return <>{options?.component(rows)}</>;
}
