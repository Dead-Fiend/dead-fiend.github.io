import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png';
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import {Context} from "../index";

const DeviceItem = ({item}) => {
    const history = useHistory()
    const {device} = useContext(Context)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + item.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border="light">
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + item.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div className="text-black-50 ">
                        <div>
                            {device.brands.map(brand=>
                                <div key={brand.id}>
                                    {(brand.id === item.brandId) ? brand.name : ''}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <Image width={16} height={16} src={star}/>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;