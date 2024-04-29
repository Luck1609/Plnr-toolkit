import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import "@/tinymce_style.css";

export default function TextEditor({ disabled, content, name }) {
  const editorRef = useRef();
  const { control } = useFormContext();

  const toolbar = !disabled
    ? "undo redo | formatselect | " +
      "bold italic backcolor | alignleft aligncenter " +
      "alignright alignjustify | bullist numlist outdent indent | " +
      " table | " +
      " help"
    : "print";

  // const change = () => setValue(name, editorRef.current?.getContent());

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value = content, onChange } }) => {
        return (
          <div className="editor-container mb-20">
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              tinymceScriptSrc="/tinymce/tinymce.min.js"
              initialValue={value}
              onChange={onChange}
              init={{
                height: 768,
                menubar: true,
                plugins: [
                  "advlist autolink lists",
                  "searchreplace fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar: toolbar,
                content_style: `
                  body { font-family:Helvetica,Arial,sans-serif; font-size:14px }


                  @media (prefers-color-scheme: dark) {
                    #tinymce {
                      color: #cbd5e1;
                    }
                  }

                  @media (prefers-color-scheme: light) {
                    #tinymce {
                      color: red;
                    }
                  }
                `,
              }}
            />
          </div>
        )
      }}
    />
  );
}
