import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import BeerList from "./BeerList";
import Button from "./Button";
import Footer from "./Footer";

import dataService from "./dataService";
import useFetchList from "./useFetchList";
import usePagination from "./usePagination";

function App() {
  const [{ data: beerList, hasNextPage, inFlight }, fetchList] = useFetchList(
    dataService.fetchBeerList
  );
  const [page, setPage] = usePagination({ handleChange: fetchList });

  return (
    <React.Fragment>
      <BeerList beerList={beerList} />
      <Footer>
        {inFlight && <p>Loading...</p>}
        <Button
          disabled={inFlight || !hasNextPage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Footer>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
