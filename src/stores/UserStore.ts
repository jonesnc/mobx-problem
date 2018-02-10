import { observable, action } from 'mobx';
import { auth, UserInfo } from 'firebase';
import { useStrict } from 'mobx';
import { enableLogging } from 'mobx-logger';

enableLogging({ action: true })

useStrict(true);

export interface UserStoreProps {
    currentUser: string,
    loaded: boolean,
    pullUser: Function
}

export class UserStore<UserStoreProps> {
    @observable currentUser = 'hi';
    @observable loaded = false;

    @action pullUser() {
        const fetchUser = () => new Promise((resolve, reject) => {
            console.log('in Promise');
            this.loaded = true;
            resolve('hello');
        });
        fetchUser().then(action((user: string) => {
            this.currentUser = user;
        }))
    }
}

export default new UserStore();