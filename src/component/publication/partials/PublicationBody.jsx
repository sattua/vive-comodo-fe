import React from 'react';
import {CDN_IMAGES_HOST} from "../../../util/constants";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddressMap from '../../../container/common/address-map/AddressMap';
import PublicationAttribute from '../../../container/publication/PublicationAttributeContainer';
import CalendarComponent from '../../../container/common/calendar/CalendarComponent';


import ImageDropZone from '../../../container/common/image-drop-zone/ImageDropZone';

import '../../../container/common/calendar/calendarStyles.scss';

// TODO move to const
const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit', view: 'view' };

const PublicationBody = ({formData, type, onImageUpload, onChangeTextField, onAttributeClick, showPopupBox, onCheckDates}) => {

    const { description } = formData;
    switch (type){
        case renderSizeTypes.card:
            return <p></p>;
            break;
        case renderSizeTypes.fullNew:
            return (<CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                    <TextField
                        id="description-multiline-textbox"
                        label= "Description"
                        multiline
                        rowsMax="10"
                        onChange={onChangeTextField}
                        className={'publication-description-field'}
                        margin="normal"
                        value={ description }
                    />
                </Typography>
                <div className={'publication-address-map'}>
                    <AddressMap />
                </div>
                <div>
                    <PublicationAttribute onClick={onAttributeClick} viewType={renderSizeTypes.fullNew} />
                </div>
            </CardContent>);
            break;
        case renderSizeTypes.fullEdit:
            return (<CardContent>
                <Typography gutterBottom variant="caption" component="p">
                    Add Images
                </Typography>
                <Button size="small" color="primary">
                    <ImageDropZone callBackAction={onImageUpload} />
                </Button>
                <Typography variant="body2" color="textSecondary" component="p">
                    <TextField
                        id="description-multiline-textbox"
                        label= "Description"
                        multiline
                        rowsMax="10"
                        onChange={onChangeTextField}
                        className={'publication-description-field'}
                        margin="normal"
                        value={ description }
                    />
                </Typography>
                <div className={'publication-address-map'}>
                    <AddressMap />
                </div>
            </CardContent>);
            break;
        default:
            return (<CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    { description }
                </Typography>
                <div className={'publication-address-map'}>
                    <AddressMap />
                </div>
                { showPopupBox && <div className={'publication-calendar-wrapper'}>
                    <div className={'publication-calendar-wrapper-body'}><CalendarComponent /></div>
                    <div className={'publication-calendar-wrapper-footer'}>
                        <button onClick={onCheckDates}>Close</button>
                        <button >Create Appointment</button>
                    </div>
                </div> }
            </CardContent>);
    }
};

export default PublicationBody;