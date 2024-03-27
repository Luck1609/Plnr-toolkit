import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";
import { useSWRConfig } from "swr";
import { toast } from "sonner";
import Helper from "@/helper";
import { formLoading } from "@/lib/toolkit/reducers/misc";

const { http, api } = Helper;

export default function useAPI() {
  const [info, setInfo] = useState(null);
  // const [progress, setProgress] = useState(0);
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();

  // const updateProgress = (percentage) => setProgress(percentage);

  useEffect(() => {
    if (info?.url) {
      const fetchData = async ({
        method,
        url,
        payload,
        options = null,
        action = null,
        mutation = null,
        errAction = null,
      }) => {
        dispatch(formLoading());

        options = {
          ...options,
          // onUploadProgress: (progress) => {
          //   updateProgress(Math.round((progress.loaded * 100) / progress.total));
          // },
        };

        try {
          const data = await http[method](`${api}${url}`, payload, options);

          mutate(mutation);

          if (data?.message) toast.success(data.message);

          setInfo(null);
          if (action) action(data);
        } catch (err) {
          console.log("API error encounted", err);
          toast.error(err.message ?? "An unknown error occured");
          if (errAction) errAction(err);
        }

        dispatch(formLoading("close"));
      };

      fetchData(info);
    }
  }, [info, mutate]);

  const makeRequest = (data) => setInfo(data);

  return { makeRequest };
  // return { makeRequest, progress };
}


useAPI.propTypes = {
  makeRequest: propTypes.shape({
    url: propTypes.string,
    method: propTypes.oneOf["post", "patch", "delete"],
    payload: propTypes.object,
    action: propTypes.func,
    mutation: propTypes.string
  })
}