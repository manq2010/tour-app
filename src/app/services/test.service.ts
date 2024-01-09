import { Injectable } from '@angular/core';
import { Tester } from '../models/test.model';


@Injectable({
  providedIn: 'root',
})
export class TesterService {
  private testers: Tester[] = [];

  constructor() {
    // You can initialize the testers array or fetch data from an external source.
    // For now, let's add a default tester for demonstration purposes.
    this.addTester({
      id: 1,
      name: 'DefaultTester',
      firstName: 'Default',
      lastName: 'Tester',
      place: 'DefaultPlace',
    });
  }

  getTesters(): Tester[] {
    return this.testers;
  }

  addTester(newTester: Tester): void {
    this.testers.push(newTester);
  }

  // Add other methods as needed for your application
}
