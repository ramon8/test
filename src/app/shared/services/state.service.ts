/**
 * @license
 * Copyright everis All Rights Reserved.
 *
 * StateService
 */

// Angular imports
import { Injectable } from '@angular/core';

// RxJS imports
import { Observable, Subject, BehaviorSubject } from 'rxjs';


/**
 * General Application State service
 * Provides a set of observable utility methods to deal with the application global state.
 */
@Injectable({
    providedIn: 'root'
})
export class StateService {

    /**
     * Observable state store.
     */
    protected state: BehaviorSubject<any>[] = [];


    /**
     * Ensures that a given state exists. If the state doesn't exists yet, will be created automatically.
     * @param name The name of the state.
     * @param value The value for the state.
     * It will be used when the state does not exists yet, since it will be created automatically.
     */
    private ensureState(name: string, value: any): boolean {

        if (!this.state[name]) {
            this.state[name] = new BehaviorSubject<any>(value);
            return false;
        }

        return true;

    } // _ensureState


    /**
     * Returns an observable from a BehaviorSubject for subscription.
     * The BehaviorSubject state will be created if already doesn't exists.
     * @param name The name of the state to subscribe to.
     * @param defaultValue Optional. The default value for the observable.
     * It will be used when the state does not exists yet, since it will be created automatically.
     */
    public stateChanges(name: string, defaultValue?: any): Observable<any> {

        this.ensureState(name, defaultValue);
        return this.state[name];

    } // stateChanges


    /**
     * Sets a new value for a given state.
     * If the state's BehaviorSubject doesn't exists yet, will be created automatically.
     * @param name The name of the state.
     * @param value The value of the state.
     */
    public setState(name: string, value: any) {

        if (this.ensureState(name, value)) {
            this.state[name].next(value);
        }

    } // setState


    /**
     * Removes an state by name.
     * @param name The name of the state to remote.
     */
    public removeState(name?: string) {

        if (name) {
            try {
                this.state[name].complete();
                this.state[name].unsubscribe();
            } catch (e) { }

            delete this.state[name];
        }

    } // removeState


    /**
     * Removes all the application states.
     */
    public destroy() {

        for (const prop of Object.keys(this.state)) {
            try {
                this.state[prop].complete();
                this.state[prop].unsubscribe();
            } catch (e) { }

            delete this.state[prop];
        }

    } // destroy

}
