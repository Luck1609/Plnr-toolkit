// import PropTypes from 'prop-types';
import { TypographyH4 } from "../Typography";
import TableFilter from "./TableFilter";
import { Button } from "../ui/button";

// THeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   btnText: PropTypes.string.isRequired,
//   positionWithin: PropTypes.bool,
//   component: PropTypes.element
// };

export default function THeader({
  options: {
    btn: { action = () => {}, text = "", show = true },
    setParams,
    title,
    component,
    position = "within",
    overrideDefaultComponent = false,
  },
  table,
}) {
  return (
    <>
      {!overrideDefaultComponent && (
        <div className="flex items-center justify-between mb-5">
          <TypographyH4 className="">{title}</TypographyH4>

          <div className="flex items-center space-x-4">
            {(position === "start") && component && component(table)}
            <TableFilter setParams={setParams} />

            {
              show && (
                <Button variant="primary" onClick={action}>
                  {text}
                </Button>
              )
            }

          {(position === "within") && component && component(table)}
          </div>
        </div>
      )}

      {(!position === "end") && component && component(table)}
    </>
  );
}
