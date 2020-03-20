import React, {Component} from 'react';
// Typography
import Typography from '@bit/mui-org.material-ui.typography';

class Flight extends Component {

    render() {
        return (

            <div className="Flight">
                <Typography variant="h1" component="h2" gutterBottom>
                    Flight
                </Typography>
                <Typography variant="h1" component="h2" gutterBottom>
                    Company {this.props.company}
                </Typography>
            </div>

        );
    }
}

export default Flight;
