import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';
import "./assets/Dragndrop.css";

import { ImageConfig } from './config/ImageConfig';
import uploadImg from './assets/cloud-upload-regular-240.png';
import {UploadOutlined} from "@ant-design/icons";
import {Button, Form, Input, Checkbox, } from "antd";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import firebase, {auth, storage, db} from "../../library/firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { direction } from '@iso/lib/helpers/rtl';
import { doc, setDoc, addDoc, collection, getFirestore, getDocs, serverTimestamp, } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {addDocument} from "../../library/firebase/firebase.util"
import {GeoPoint} from "firebase/firestore";
import {toFloat} from "@glidejs/glide/src/utils/unit";









const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    const fileCLear = () => {
        if (fileList && fileList.length > 0)  {
            console.log("clearing");
            const updatedList = [];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }

    }

    const [image, setImage] = useState(null);
    const [size, setSize] = React.useState('large');
    const [pleaseLogIn, setPleaseLogIn] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;

    const [checked, setChecked] = useState(false);

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSubmit);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    }


    const handleSubmit = () => {
        function onSuccess(position) {
            geolocation = new GeoPoint(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude))
            const nullIsland = new GeoPoint(null, null);
            if (geolocation.isEqual(nullIsland)) {
                geolocation = "Null Island";
                console.log("Null Island Error");
            }
        }

        function onError() {
            geolocation = "Access Denied";
            console.log("Failed to get your Geolocation");
        }

        let imageName = [];
        let imageUrl = []
        let geolocation = "";

        const batchName = String("batch" + uuidv4());
        const batchRef = doc(collection(db, `users/${user.uid}/${batchName}`));
        if (checked) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
            console.log(geolocation);
        }
        for (let i = 0; i < fileList.length; i++) {
            const name = uuidv4();
            imageName.push(name);
            const imageRef = ref(storage, `images/${name}`);
            const image = fileList[i];
            console.log(typeof (image));
            if (image) {
                uploadBytes(imageRef, image)
                    .then(() => {
                        getDownloadURL(imageRef)
                            .then( async (currUrl) => {
                                console.log(currUrl);
                                imageUrl.push(currUrl);

                                await setDoc(batchRef, {
                                    imageURLs: imageUrl,
                                    imageNames: imageName,
                                    imageTags: [],
                                    createdAt: serverTimestamp(),
                                    geopoint: geolocation
                                }, { merge: true });
                                console.log(batchRef.id);
                            })
                            .catch((error) => {
                                console.log(error.message, "error getting the image url");
                            });
                        setImage(null);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            } else {
                console.log("No Image Selected");
            }
        }


        console.log(imageUrl); //TEST ONLY
        console.log(imageName); //TEST ONLY
    };

    return (
        <div className="WidgetWrapper">
            <div className="DragndropWrapper">

                <div className="box">
                    <h2 className="header">
                        Upload File Input
                    </h2>
                    <div
                        ref={wrapperRef}
                        className="drop-file-input"
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                    >
                        <div className="drop-file-input__label">
                            <img src={uploadImg} alt="" />
                            <p>Drag & Drop your files here</p>
                        </div>
                        <input type="file" value="" onChange={onFileDrop} />
                    </div>
                    {
                        fileList.length > 0 ? (
                            <div className="drop-file-preview">
                                <p className="drop-file-preview__title">
                                    Ready to upload
                                </p>
                                {
                                    fileList.map((item, index) => (
                                        <div key={index} className="drop-file-preview__item">
                                            <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                            <div className="drop-file-preview__item__info">
                                                <p>{item.name}</p>
                                                <p>{item.size}B</p>
                                            </div>
                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <Form.Item
                {...tailFormItemLayout}
              >
                <Checkbox checked={checked} onChange={(e) => { setChecked(e.target.checked);}}>
                  Include Geolocation of Asset
                </Checkbox>
              </Form.Item>
            <div className="ButtonWrapper">
                <Button
                    type="primary"
                    icon={<UploadOutlined />}
                    size={size}
                    style={{
                        margin: direction === 'rtl' ? '0 0 8px 8px' : '0 8px 8px 0',
                        backgroundColor: !fileList.length ? "#b3c6e6" : "",
                        cursor: !fileList.length ? "not-allowed" : "pointer",
                    }}
                    disabled={!fileList.length}
                    onClick={() => {
                        if (!!firebase.auth().currentUser) {
                            setPleaseLogIn(false);
                            handleSubmit();
                            fileCLear();
                            setChecked(false);
                            console.log("log in check passed");
                        }
                        else {
                            setPleaseLogIn(true);
                            console.log("note logged in");
                        }
                    }}

                >
                    Upload
                </Button>
                <p style={{
                    color: "red",
                    display: pleaseLogIn ? "" : "none"
                }}>Please Login to Upload Images</p>
            </div>
        </div>

    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;