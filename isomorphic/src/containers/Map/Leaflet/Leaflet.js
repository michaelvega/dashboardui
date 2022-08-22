import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import Box from '@iso/components/utility/box';
import basicStyle from '@iso/assets/styles/constants';
import LeafletMap from './LeafletMap';
import "./Leaflet.css"
import { customHtmlMarker, basicMarkers, customIconMarkers } from './config';
import {listLocations} from '../../../library/firebase/firebase.authentication.util.js';

export default function() {
  const { rowStyle, colStyle, gutter } = basicStyle;

  useEffect(() => {
       listLocations().then((docs) => {console.log(docs)});
    }, [])

  return (
    <LayoutWrapper>
      <PageHeader>Map</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">

        <Col md={24} sm={12} xs={24} style={colStyle} id="leafletMap">
          <Box
            title={
              <IntlMessages id="Map.leaflet.leafletCustomHtmlMarkerTitle" />
            }
          >
            <ContentHolder>
              <LeafletMap
                id="map-with-custom-markers"
                htmlMarkerList={customHtmlMarker}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
