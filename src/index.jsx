import * as React from 'react';


export default class ImageCropLite extends React.Component {

    handleChange() {
        console.log('azad');
    }
    
    render() {

        return (
            <div onClick={this.handleChange}>
                click on
            </div>
        );
    }
}
