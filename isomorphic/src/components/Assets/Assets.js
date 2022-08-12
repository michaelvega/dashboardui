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



const Assets = () => {
    const [size, setSize] = React.useState('large');

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const imageRef = useRef();
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreview({
                image: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleSubmit = () => {
        const name = uuidv4();
        const imageRef = ref(storage, `images/${name}`);
        if (image){
            uploadBytes(imageRef, image)
                .then(() => {
                    getDownloadURL(imageRef)
                        .then((url) => {
                            setUrl(url);
                        })
                        .catch((error) => {
                            console.log(error.message, "error getting the image url");
                        });
                    setImage(null);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
        else {
            console.log("No Image Selected");
        }

    };

    const onFileChange = (files) => {
        console.log(files);
    }

    //<input type="text" placeholder="Text or..." /> TEXTINPUT
    /*
    <button onClick={handleSubmit} className="button ps-button" disabled={!image} style={{
                                        backgroundColor: !image ? "darkgray" : "#347cff",
                                        cursor: !image ? "not-allowed" : "pointer"
                                    }}>Upload</button>
     */

    return (
        <LayoutWrapper>
            <PageHeader>Upload Assets</PageHeader>
            <Box>
                <ContentHolder>
                    <div className="PostShareWrapper">
                        <div className="DragndropWrapper">
                            <div className="box">
                                <h2 className="header">
                                    React drop files input
                                </h2>
                                <DropFileInput
                                    onFileChange={(files) => onFileChange(files)}
                                />
                            </div>
                        </div>
                        <div className="PostShare">

                            <div>

                                <div className="postOptions">
                                    <div className="option photooption" style={{ color: "var(--photo)"  }}
                                         onClick={()=>imageRef.current.click()}
                                    >
                                        <UilScenery />
                                        Photo
                                    </div>
                                    <div className= "option videooption" style={{ color: "var(--video)" }}>
                                        <UilPlayCircle />
                                        Video
                                    </div>{" "}
                                    <div className="option locationoption" style={{ color: "var(--location)" }} onClick={getLocation}>
                                        <UilLocationPoint />
                                        Location
                                    </div>{" "}
                                    <div className="option scheduleoption" style={{ color: "var(--schedule)" }}>
                                        <UilSchedule />
                                        Shedule
                                    </div>
                                    <Button
                                        type="primary"
                                        icon={<UploadOutlined />}
                                        size={size}
                                        style={{
                                            margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
                                            backgroundColor: !image ? "#b3c6e6" : "",
                                            cursor: !image ? "not-allowed" : "pointer"
                                        }}
                                        disabled={!image}
                                        onClick={handleSubmit}

                                    >
                                        Upload
                                    </Button>
                                    <div style={{ display: "none" }}>
                                        <input
                                            type="file"
                                            name="myImage"
                                            ref={imageRef}
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                {image && (

                                    <div className="previewImage">
                                        <UilTimes onClick={()=>setImage(null)}/>
                                        <img src={imagePreview.image} alt="" />
                                    </div>

                                )}


                            </div>
                        </div>
                    </div>
                </ContentHolder>
            </Box>
        </LayoutWrapper>
    );
};

export default Assets;