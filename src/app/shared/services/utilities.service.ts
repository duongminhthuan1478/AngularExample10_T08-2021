/**
 * Service for test Injectable - providedIn; 
 * Refer to: src\app\components\100days-Angular\15_DI\README.md
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UtilitiesService {
  public thuanGlobalTest;

  constructor() { 
    console.log("UtilitiesService");
  }

  public sayHello() {
    return "This is a greet from utilities.service";
  }
}
