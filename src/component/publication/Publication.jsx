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

const renderSizeTypes = { card: 'card', fullNew: 'full-new', fullEdit: 'full-edit', view: 'view' };
const publicationRenderSizes = [renderSizeTypes.card, renderSizeTypes.fullEdit, renderSizeTypes.fullNew, renderSizeTypes.view];

class Publication extends Component {
    state = {
        title: '',
        description: '',
        address: '',
        images: [],
        isDirectAccess: false,
        isFormTouched: false,
    };

    onImageUpload = (images) => {
        this.setState({ images });
    };

    onCreatePublication = () => {
        this.props.onPositiveAction(this.state);
    };

    onLearnMore = () => {
        window.location = `http://localhost:3000/publication/${this.props.id}`; // TODO clean up
    };

    onChangeTextField = (e) => {
        if (e.currentTarget.id && e.currentTarget.value) {
            switch (e.currentTarget.id) {
                case 'publication-title-textfield':
                    this.setState({ title: e.currentTarget.value, isFormTouched: true });
                break;

                case 'description-multiline-textbox':
                    this.setState({ description: e.currentTarget.value, isFormTouched: true });
                break;
            }
        }
    };

    getFormClassName = (type) => publicationRenderSizes[type];

    getFormTop = (formData, type) => {
        const { title } = formData;
        switch (type){
            case renderSizeTypes.card:
                return (<CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={`${CDN_IMAGES_HOST}/150`}
                        title= {this.props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { this.props.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { this.props.description }
                        </Typography>
                    </CardContent>
                </CardActionArea>);
                break;
            case renderSizeTypes.fullNew:
                return (<CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <TextField
                            id="publication-title-textfield"
                            label= "Title"
                            rowsMax="10"
                            className={'publication-description-field'}
                            margin="normal"
                            value={ title }
                            onChange={this.onChangeTextField}
                        />
                    </Typography>
                    <Button size="small" color="primary">
                        <ImageDropZone callBackAction={this.onImageUpload} />
                    </Button>
                </CardContent>);
                break;
            case renderSizeTypes.fullEdit:
                return (<CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <TextField
                                id="publication-title-textfield"
                                label= "Title"
                                rowsMax="10"
                                className={'publication-description-field'}
                                margin="normal"
                                value={ title }
                                onChange={this.onChangeTextField}
                            />
                        </Typography>
                    </CardContent>);
                break;
            default:
                return (<CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { title !== '' ? title : this.props.title }
                    </Typography>
                </CardContent>);
        }
    };

    getFormBody = (formData, type) => {
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
                            onChange={this.onChangeTextField}
                            className={'publication-description-field'}
                            margin="normal"
                            value={ description ? description : this.state.description }
                        />
                    </Typography>
                </CardContent>);
                break;
            case renderSizeTypes.fullEdit:
                return (<CardContent>
                        <Typography gutterBottom variant="caption" component="p">
                            Add Images
                        </Typography>
                        <Button size="small" color="primary">
                            <ImageDropZone callBackAction={this.onImageUpload} />
                        </Button>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <TextField
                            id="description-multiline-textbox"
                            label= "Description"
                            multiline
                            rowsMax="10"
                            onChange={this.onChangeTextField}
                            className={'publication-description-field'}
                            margin="normal"
                            value={ description ? description : this.state.description }
                            />
                        </Typography>
                    </CardContent>);
                break;
            default:
                return (<CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        { description ? description : this.state.description }
                    </Typography>
                </CardContent>);
        }
    };

    getFormFooter = (formData, type) => {
        switch (type){
            case renderSizeTypes.card:
                return (<Card style={{maxWidth: 345}}>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.onLearnMore} >
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
                    <Button size="small" color="primary" onClick={this.onCreatePublication}>
                        Create
                    </Button>
                </CardActions>);
                break;
            case renderSizeTypes.fullEdit:
                return (<CardActions>
                    <Button size="small" color="secondary">
                        Clear
                    </Button>
                    <Button size="small" color="primary" onClick={this.onCreatePublication}>
                        Update
                    </Button>
                </CardActions>);
                break;
            default:
                return (<CardActions>
                    <Button size="small" color="secondary">
                        Check Dates
                    </Button>
                    <Button size="small" color="primary" onClick={this.onCreatePublication}>
                        Contact
                    </Button>
                </CardActions>);
        }
    };


    buildFormByTypeView = (viewType) => {
        const className = this.getFormClassName(viewType);
        const formData =  viewType === renderSizeTypes.fullNew ? Object.assign({}, this.state) : Object.assign({}, this.props);

        if ((viewType === renderSizeTypes.fullEdit || viewType === renderSizeTypes.fullNew) && this.state.isFormTouched) {
            formData.title = this.state.title !== '' ?  this.state.title : formData.title;
            formData.description = this.state.description !== '' ?  this.state.description : formData.description;
        }

        const top = this.getFormTop(formData, viewType);
        const body = this.getFormBody(formData, viewType);
        const footer = this.getFormFooter(formData, viewType);

        const view = <div className={`publication publication-${className}`} >
            <Card>
                {top}
                {body}
                {footer}
            </Card>
        </div>;


        return view;
    };

    fullViewRender = () => {
        const view = this.buildFormByTypeView('');
        return view;
    };

    render() {
        switch (this.props.renderSize) {
            case renderSizeTypes.card:
                // Small render, box/card ish.
                return this.buildFormByTypeView(renderSizeTypes.card);
            case renderSizeTypes.fullEdit:
                // Form pre-filled with data and images.
                return this.buildFormByTypeView(renderSizeTypes.fullEdit);
            case renderSizeTypes.fullNew:
                return  this.buildFormByTypeView(renderSizeTypes.fullNew);
            default:
                // Just print an empty form
                return this.fullViewRender();
        }
    }
}

Publication.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    description: PropTypes.string,
    renderSize: PropTypes.oneOf(publicationRenderSizes),
    onPositiveAction: PropTypes.func.isRequired,
    onLearnMore: PropTypes.func,
};

Publication.defaultProps = {
    description: '',
};

export default Publication;
