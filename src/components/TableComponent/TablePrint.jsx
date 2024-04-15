import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { TypographyH3 } from "../Typography";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import Helper from "@/helper";


const getPageMargins = () => {
  return `@page { margin: 40px 10px }; }`;
}, { isJsonString } = Helper;

export default function TablePrint({ data: { applications, title} }) {
  const ref = useRef(), handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "Document title here",

  })

  return (
    // <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-55">
     <>
        <style>{getPageMargins()}</style>
        <ScrollArea className="max-w-6xl w-full h-full max-h-[90vh] relative">
          {/* <div className="w-full pt-0 p-5"> */}
            <Button className="absolute right-5 top-0" variant="primary" onClick={handlePrint}>Print document</Button>

            <div ref={ref}>
              <TypographyH3 className="text-center py-3">{title}</TypographyH3>

              <table className="w-full">
                {/* <caption className="caption-bottom mt-5">
                  Table 3.1: Professional wrestlers and their signature moves.
                </caption> */}
                <thead>
                  <tr className="border-y border-default">
                    <th className={headerStyles}>Name</th>
                    <th className={headerStyles}>App. no.</th>
                    <th className={headerStyles}>Plot details</th>
                    <th className={headerStyles}>Use</th>
                    <th className={headerStyles}>Height</th>
                    <th className={headerStyles}>Phone no.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default">
                  {
                    applications.map((app, index) => (
                      <tr className="p-2 align-top" key={index.toString()}>
                        <td className="p-2">{`${app.title} ${app.firstname} ${app.lastname}`}</td>
                        <td className="p-2">{app.application_num}</td>
                        <td className="p-2">{`${app.locality.name} ${app.sector.name} ${app.block} plot no. ${app.plot}`}</td>
                        <td className="p-2">{ isJsonString(app.use).map((name) => <span key={name}>{name}</span>) }</td>
                        <td className="p-2">{ `${app.height} st.` }</td>
                        <td className="p-2">{ app.contact.replace('+233', '0') }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          {/* </div> */}
        </ScrollArea>
     </>
    // </div>
  );
}


var headerStyles = "text-left p-2";