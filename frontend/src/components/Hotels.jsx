import React, { useEffect, useState } from "react";

const serverURL = import.meta.env.PUBLIC_API_URL;

export default function Hotels() {
  const [hoteslInfoState, setHotelsInfoState] = useState([]);
  const [isHotelDataLoading, setIsHotelDataLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);

  async function fetchHotelsInfo() {
    console.log("[DEBUG] FETCHING INFO");
    const hotelsInfoRes = await fetch(`${serverURL}hotels/`, {
      headers: {
        Accept: "json",
      },
      method: "GET",
    });

    const hotelsInfoText = await hotelsInfoRes.json();

    setHotelsInfoState(...hoteslInfoState, hotelsInfoText);
    setIsHotelDataLoading(false);
  }
  useEffect(() => {
    console.log("[DEBUG] Loading component");
    fetchHotelsInfo();
  }, []);

  useEffect(() => {
    console.log("[DEBUG] UPDATED STATE ", hoteslInfoState);
  }, [hoteslInfoState]);

  return (
    <>
      <a>Test App</a>
      {!isHotelDataLoading ? (
        hoteslInfoState.map((doc, index) => {
          return (
            <div key={index} className="flex items-start">
              <a> {`${doc.title}`} </a>
            </div>
          );
        })
      ) : (
        <div>
          <a>Loading hotels...</a>
        </div>
      )}
    </>
  );
}
