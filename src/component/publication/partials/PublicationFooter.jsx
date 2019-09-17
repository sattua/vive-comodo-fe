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

import ImageDropZone from '../../../container/common/image-drop-zone/ImageDropZone';

// TODO move to consts
const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit', view: 'view' };

const PublicationFooter = ({formData, type, onCreatePublication, onLearnMore, onCheckDates}) => {
    switch (type){
        case renderSizeTypes.card:
            return (<Card style={{maxWidth: 345}}>
                <CardActions>
                    <Button size="small" color="primary" onClick={onLearnMore} >
                        Learn More
                    </Button>
                </CardActions>
            </Card>);
            break;
        case renderSizeTypes.fullNew:
            return (<CardActions>
                <Button size="small" color="secondary">
                    Clear
                </Button>
                <Button size="small" color="primary" onClick={onCreatePublication}>
                    Create
                </Button>
            </CardActions>);
            break;
        case renderSizeTypes.fullEdit:
            return (<CardActions>
                <Button size="small" color="secondary">
                    Clear
                </Button>
                <Button size="small" color="primary" onClick={onCreatePublication}>
                    Update
                </Button>
            </CardActions>);
            break;
        default:
            return (<CardActions>
                <Button size="small" color="secondary" onClick={onCheckDates}>
                    Check Dates
                </Button>
                <Button size="small" color="primary" onClick={onCreatePublication}>
                    Contact
                </Button>
            </CardActions>);
    }
};

export default PublicationFooter;