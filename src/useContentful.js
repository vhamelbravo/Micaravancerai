import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ymlwuf02gnbp",
    accessToken: "ZHp8fNNdfR5GMNZWFL2Kd6UYY9KZTyz0s6r6fILn1hs",
    host: "cdn.contentful.com",
  });
  const getProducts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "productos",
        select: "fields",
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getProducts };
};

export default useContentful;
