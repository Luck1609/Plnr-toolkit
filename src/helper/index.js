import HttpReq from "@/lib/axios";

const env = import.meta.env;

class HelperFunc {
  http = new HttpReq();
  api = env.VITE_API;

  isLive = env.MODE === "production"

  isJsonString = (string) => {
    try {
      // console.log('type of json string', typeof(string), ))
      if (!isNaN(parseInt(string))) throw new Error("not a string");

      return JSON.parse(string);
    } catch (e) {
      return [];
    }
  };

  filterValues = ({ options, param = { label: "label", value: "value" } }) => {
    options = typeof options === "object" ? Object.values(options) : options;

    return options.reduce(
      (options, option) => [
        ...options,
        {
          label: option[param.label],
          value: option[param.value],
        },
      ],
      []
    );
  };

  generateAlphabets = Array(26)
    .fill()
    .reduce((alphabets) => {
      const letter = String.fromCharCode(65 + alphabets.length);
      return [
        ...alphabets,
        { label: `Block ${letter}`, value: `Block ${letter}` },
      ];
    }, []);
}

const Helper = new HelperFunc();

export default Helper;
