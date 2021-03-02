import { getLandmarks } from './LandmarkData.js'
import { Landmark } from './Landmark.js'

export const landmarkList = () => {
    const landmarks = getLandmarks()
    const inputLocation = document.querySelector(".country_info--landmarks")
    landmarks.forEach(
        (landmarkObj) => {
            inputLocation.innerHTML += Landmark(landmarkObj)
        }
    )
};