import React, {useRef, useState} from 'react';
import "./Assets.css"
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { v4 as uuidv4 } from 'uuid';
import { storage } from "../../library/firebase/firebase.js";
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {UploadOutlined} from "@ant-design/icons";
import {Button} from "antd";
import { direction } from '@iso/lib/helpers/rtl';
import DropFileInput from "../Dragndrop/DropFileInput";
import "../Dragndrop/assets/Dragndrop.css"


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
}



const Assets = props => {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <LayoutWrapper>
            <PageHeader>Assets</PageHeader>
            <Box>
                <ContentHolder>
                    <div className="PostShareWrapper">
                        <DropFileInput
                            onFileChange={(files) => onFileChange(files)} />
                    </div>
                </ContentHolder>
            </Box>
        </LayoutWrapper>
    );
};

export default Assets;