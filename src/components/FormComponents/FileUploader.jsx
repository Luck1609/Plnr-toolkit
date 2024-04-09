import { useFormContext } from "react-hook-form";
import { ImageUp, Fullscreen } from "lucide-react";
import propTypes from "prop-types";
// import { cn } from "@/lib/utils";
import { TypographyXs } from "../Typography";

const FileUploader = ({ label = "", name }) => {
  const { register, watch, formState: {errors} } = useFormContext(),
    file = watch(name);

  console.log("file info", file);

  return (
    <div className="flex flex-col">
      <span className="text-sm blockpl-3 mb-1 font-semibold text-slate-400">
        {label}
      </span>
      <div className="flex items-center space-x-3  rounded">
        <div className="shrink-0">
          {typeof file === "string" ? (
            file === "" ? (
              <ImageUp className="h-16 w-20 text-color dark:text-slate-200 rounded" />
            ) : (
              <img
                src={`${file}`}
                alt="Server img"
                className="h-16 w-20 object-cover rounded p-1"
              />
            )
          ) : (
            <>
              {file?.length > 0 ? (
                <>
                  <img
                    className="h-16 w-20 object-cover rounded p-1"
                    src={URL.createObjectURL(file[0])}
                    alt="Current profile photo"
                  />
                </>
              ) : (
                <Fullscreen className="w-16 h-16 text-color dark:text-slate-200  rounded" />
              )}
            </>
          )}
        </div>
        <label className="block">
          <span className="sr-only">Choose image</span>
          <label className="text-xs inline-block mr-4">{file?.length > 0 ? file[0].name : ""}</label>
          <input
            {...register(name)}
            type="file"
            className="block w-[120px] text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-slate-200 dark:file:bg-input dark:file:text-slate-300 hover:file:bg-violet-100"
          />
        </label>

      </div>

      <TypographyXs className="text-danger">{errors?.[name]?.message}</TypographyXs>
    </div>
  );
};

FileUploader.displayName = "FileUploader";

export { FileUploader };

FileUploader.propTypes = {
  label: propTypes.string,
  name: propTypes.string.isRequired,
};
