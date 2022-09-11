import { SWRConfig } from "swr";

import Layout from "@containers/Layout";
import Main from "@containers/Main";
import api from "@api";

const App = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (key, query) => api(`/gifs/search?q=${query}`)
      }}
    >
      <Layout>
        <Main />
      </Layout>
    </SWRConfig>
  );
};

export default App;
