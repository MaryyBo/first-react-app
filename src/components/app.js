import React from "react";
import PhonesLoader from "./PhonesLoader/PhonesLoader";
import TVLoader from "./TVLoader/TVLoader";
import DataProvider from "./DataProvider/DataProvider";


function App() {

  return (
    <>
      <DataProvider 
      
      loadData={() => {
        return fetch('./phones.json')
          .then((response) => response.json())
      }}>


        {(state) => {
          const { data, isLoading, isError } = state

          return (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error is happening!!!</div>}

              <ul>
                {data.map((data, index) => <li key={index}>Brand: {data.brand} ---Model: {data.model} --- Price: {data.price}</li>)}
              </ul>
            </>
          );
        }}
        </DataProvider>
    </>
  )
}



export default App;

/*

loadData={() => {
        return fetch('./phones.json')
          .then((response) => response.json())
      }}

        renderData={(state) => {
          const { data, isLoading, isError } = state

          return (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error is happening!!!</div>}

              <ul>
                {data.map((data) => <li>Brand: {data.brand} ---Model: {data.model} --- Price: {data.price}</li>)}
              </ul>
            </>
          );
        }}
*/
