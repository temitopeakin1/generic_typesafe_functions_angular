import { Component, Signal, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from temitope!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  snack = signal<Snack>(SNACK);
  user = signal<User>(USER);

  updateSnack() {
    this.snack.update((s) => ({
      ...s, // create a new object
      name: 'peanuts',
    }));
    logSignal(this.snack);
  }

  updateUser() {
    this.user.update((u) => ({
      ...u,
      name: 'Temi',
    }));
    logSignal(this.user);
  }
}

export function logSignal<T>(sg: Signal<T>, prop?: keyof T) {
  console.log(sg());
}

bootstrapApplication(App);

export const SNACK: Snack = {
  id: 1,
  name: 'popcorn',
  price: 2.0,
  isInStock: true,
};
export const USER: User = { id: 5, name: 'Bilbo', userName: 'Akin' };

export interface Snack {
  id: number;
  name: string;
  price: number;
  isInStock: boolean;
}

export interface User {
  id: number;
  name: string;
  userName: string;
}
