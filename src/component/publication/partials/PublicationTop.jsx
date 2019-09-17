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

const PublicationTop = ({formData, type, onImageUpload, onChangeTextField}) => {
    const {title} = formData;
    switch (type) {
        case renderSizeTypes.card:
            return (<CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={`${CDN_IMAGES_HOST}/150`}
                    title={formData.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {formData.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {formData.description}
                    </Typography>
                </CardContent>
            </CardActionArea>);
            break;
        case renderSizeTypes.fullNew:
            return (<CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <TextField
                        id="publication-title-textfield"
                        label="Title"
                        rowsMax="10"
                        className={'publication-description-field'}
                        margin="normal"
                        value={title}
                        onChange={onChangeTextField}
                    />
                </Typography>
                <Button size="small" color="primary">
                    <ImageDropZone callBackAction={onImageUpload}/>
                </Button>
            </CardContent>);
            break;
        case renderSizeTypes.fullEdit:
            return (<CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <TextField
                        id="publication-title-textfield"
                        label="Title"
                        rowsMax="10"
                        className={'publication-description-field'}
                        margin="normal"
                        value={title}
                        onChange={onChangeTextField}
                    />
                </Typography>
            </CardContent>);
            break;
        default:
            return (<CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { title }
                </Typography>
            </CardContent>);
    }
};

export default PublicationTop;