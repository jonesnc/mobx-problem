import * as React from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Menu } from 'semantic-ui-react';
import { UserStore, UserStoreProps } from '../stores/UserStore';
import { hot } from 'react-hot-loader';
import { auth, initializeApp } from 'firebase';

interface AppProps {
    UserStore?: UserStoreProps,
    RoutingStore?: {
        location: any,
        push: any,
        goBack: any
    }
}

@inject('UserStore', 'RoutingStore')
@observer
class App extends React.Component<AppProps, {}> {
    componentDidMount() {
        console.log('in App componentDidMount');
        
        if (!this.props.UserStore.loaded){
            this.props.UserStore.pullUser();
        }
    }

    render() {
        const { location, push, goBack } = this.props.RoutingStore;
        if (this.props.UserStore.loaded) {
            return (
                <div>
                    {this.props.UserStore.currentUser}
                </div>
            );
        }
        return (
            <div>Loading</div>
        );

    }
}

declare const module: any;

export default hot(module)(App);