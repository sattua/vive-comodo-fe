import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { CDN_IMAGES_HOST } from '../../util/constants';

import './PublicationStyle.css';

import ImageDropZone from '../../container/common/image-drop-zone/ImageDropZone';

const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit' };
const publicationRenderSizes = [renderSizeTypes.card, renderSizeTypes.fullEdit, renderSizeTypes.fullNew];

class Publication extends Component {
    state = {
        title: 'hola',
        description: 'test',
        address: 'dscsd',
        images: [],
    };

    onImageUpload = (images) => {
        /*const imagePreview = images.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));*/
        debugger;
        this.setState({ images });
    };

    onCreatePublication = () => {
        this.props.onCreate(this.state);
    };

    cardRender = () => {
        return (
            <div className="publication publication-card">
                <Card style={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={`${CDN_IMAGES_HOST}/150`}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    };

    fullEditRender = () => {
        return <div className="publication publication-full">
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={`${CDN_IMAGES_HOST}/150`}
                    title="Contemplative Reptile"
                    className={'publication-full-main-img'}
                />
                <Button size="small" color="primary">
                    <ImageDropZone callBackAction={this.onImageUpload} />
                </Button>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <TextField
                            id="standard-multiline-flexible"
                            label= "Description"
                            multiline
                            rowsMax="10"
                            onChange={()=>{}}
                            className={'publication-description-field'}
                            margin="normal"
                        />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary">
                        Dismiss
                    </Button>
                    <Button size="small" color="primary">
                        Save
                    </Button>
                </CardActions>
            </Card>
        </div>
    };

    fullNewRender = () => {
        return <div className="publication publication-full">
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                </CardContent>
                <Typography gutterBottom variant="caption" component="p">
                    Add Images
                </Typography>
                <Button size="small" color="primary">
                    <ImageDropZone callBackAction={this.onImageUpload} />
                </Button>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <TextField
                            id="standard-multiline-flexible"
                            label= "Description"
                            multiline
                            rowsMax="10"
                            onChange={()=>{}}
                            className={'publication-description-field'}
                            margin="normal"
                        />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary">
                        Clear
                    </Button>
                    <Button size="small" color="primary" onClick={this.onCreatePublication}>
                        Create
                    </Button>
                </CardActions>
            </Card>
        </div>
    };

    render() {
        switch (this.props.renderSize) {
            case renderSizeTypes.card:
                // Small render, box/card ish.
                return this.cardRender();
            case renderSizeTypes.fullNew:
                // Form to create new entry.
                return this.fullNewRender();
            case renderSizeTypes.fullEdit:
                // Form pre-filled with data and images.
                return this.fullEditRender();
            default:
                // Just print an empty form
                return this.fullNewRender();
        }
    }
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string,
    renderSize: PropTypes.oneOf(publicationRenderSizes),
    onCreate: PropTypes.func.isRequired,
};

Publication.defaultProps = {
    description: '',
};

export default Publication;
