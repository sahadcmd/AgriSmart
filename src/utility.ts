import * as Nominatim from "nominatim-browser";
import { NominatimResponse } from "nominatim-browser";

export function getCurrentCity() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  return new Promise((resolve, reject) => {
    function success(pos: any) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();

      Nominatim.reverseGeocode({
        lat: lat,
        lon: lng,
        addressdetails: true,
      })
        .then((result: NominatimResponse) => {
          resolve(result.address.city);
        })
        .catch((error: any) => {
          console.error(error);
          reject(error);
        });
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}
