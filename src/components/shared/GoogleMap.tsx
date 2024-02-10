// import { useGeolocation } from '@uidotdev/usehooks';
// import React, { useRef } from 'react'
// import { useEffect } from 'react';

// const GoogleMap = () => {
//     const location = useGeolocation();
//     let mapDiv = useRef<HTMLDivElement>(null!)
//     // Initialize and add the map
//     useEffect(() => {
//         console.log(location)
//     }, [location])

//     useEffect(() => {
//         const mapMaker = async () => {
//             if (location.latitude === null || location.longitude === null) return

//             let map
//             const position = { lat: location.latitude, lng: location.longitude }

//             // Request needed libraries.
//             //@ts-ignore
//             const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//             const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

//             // The map, centered at Uluru
//             map = new Map(
//                 mapDiv.current,
//                 {
//                     zoom: 4,
//                     center: position,
//                     mapId: '85381b3a8c127883',
//                 }
//             )

//             // The marker, positioned at Uluru
//             new AdvancedMarkerElement({
//                 map: map,
//                 position: position,
//                 title: 'Uluru'
//             });
//         }

//         mapMaker()
//     }, [])
//     return (
//         <div ref={mapDiv} style={{ height: 300 }}></div>
//     )
// }

export default {}