import customIcon from '@iso/assets/images/map-pin-2.svg';
import customIconShadow from '@iso/assets/images/marker-shadow.png';
import infoWindowImg1 from '@iso/assets/images/image1.jpg';
import infoWindowImg2 from '@iso/assets/images/image3.jpg';
import infoWindowImg3 from '@iso/assets/images/image4.jpg';
import infoWindowImg4 from '@iso/assets/images/image5.jpg';

const basicMarkers = [
  {
    position: [40.68792, -74.01626],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg1} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Park</h3>
      </div>`,
  },
  {
    position: [40.72143, -74.05729],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg2} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.7215, -73.999],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg3} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square</h3>
      </div>`,
  },
  {
    position: [40.696518, -73.95352],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg4} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>New York University</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg2} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Library Golf Club</h3>
      </div>`,
  },
];

const customIconMarkers = [
  {
    position: [40.68792, -74.01626],
    iconUrl: customIcon,
    shadowUrl: customIconShadow,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg2} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
];

const customHtmlMarker = [
  {
    position: [40.68792, -74.01626],
    html: `
      <MarkerWrapper class="marker-icon-wrapper">
        <i class="ion-flame" />
      </MarkerWrapper>`,
    className: 'marker-icon',
    popupText: `
      <div class="isoInfoWindowImage">
        <img src="https://firebasestorage.googleapis.com/v0/b/fir-functions-api-a924d.appspot.com/o/images%2F7162a042-f547-4591-8235-e67e7f713ebe?alt=media&token=2ffa1b50-1615-4ec2-871c-d58d304cf317" alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
];

const markerCluster = [
  {
    position: [40.68792, -74.01626],
    iconUrl: customIcon,
    iconSize: [40, 40],
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg2} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.72143, -74.05729],
    iconUrl: customIcon,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg2} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square Village</h3>
      </div>`,
  },
  {
    position: [40.7215, -73.999],
    iconUrl: customIcon,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg1} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Washington Square</h3>
      </div>`,
  },
  {
    position: [40.696518, -73.95352],
    iconUrl: customIcon,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg3} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>New York University</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    iconUrl: customIcon,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg4} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Library Golf Club</h3>
      </div>`,
  },
  {
    position: [40.6943, -74.074201],
    iconUrl: customIcon,
    popupText: `
      <div class="isoInfoWindowImage">
        <img src=${infoWindowImg1} alt="" />
      </div>
      <div class="isoInfoWindowDetails">
        <h3>Library Golf Club Old Portion</h3>
      </div>`,
  },
];

const markerRouting = {
  postion_start: [40.72143, -74.05729],
  iconUrl: customIcon,
  postion_end: [40.6943, -74.074201],
};

export {
  basicMarkers,
  customIconMarkers,
  customHtmlMarker,
  markerCluster,
  markerRouting,
};
