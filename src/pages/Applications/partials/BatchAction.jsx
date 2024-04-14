

export default function BatchAction({ rows }) {
  return (
    <div className="w-full flex justify-end py-2 px-3">
      { rows.length } rows selected 
    </div>
  )
}
