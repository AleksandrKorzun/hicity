import axios from "axios";
const urlNP = "https://api.novaposhta.ua/v2.0/json/";
const headersRegions = {
  "apiKey": "b9aeaec89e0e4c9cdba28d6a89dbaae5",
  "modelName": "Address",
  "calledMethod": "getAreas",
  "methodProperties": {},
};

export const getRegions = async () => {
  const data = await axios.post(urlNP, headersRegions);
  const regions = data.data.data.reduce((acc, item) => {
      acc.push({label: item.Description, ref: item.Ref})
      return acc;
    }, [])
  return regions;
};
export const getCities = async (ref) => {
    const data = await axios.post(urlNP, {
        "apiKey": "b9aeaec89e0e4c9cdba28d6a89dbaae5",
        "modelName": "Address",
        "calledMethod": "getSettlements",
        "methodProperties": {
        "AreaRef" : ref,
        // "Ref" : "00000000-0000-0000-0000-000000000000",
        // "RegionRef" : "00000000-0000-0000-0000-000000000000",
        // "Page" : "1",
        // "Warehouse" : "1",
        "FindByString" : "Київ",
        // "Limit" : "20"
        }
     });
    console.log(data.data.data);
    return data.data;
  };
