import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tenant-component',
  templateUrl: './tenant-component.component.html',
  styleUrls: ['./tenant-component.component.scss']
})
export class TenantComponentComponent {
  states = [
    { name: 'US East (Ohio)', abbrev: 'us-east-2' },
    { name: 'US East (N. Virginia)', abbrev: 'us-east-1' },
    { name: 'US West (N. California)', abbrev: 'us-west-1' },
    { name: 'US West (Oregon)', abbrev: 'us-west-2' },
    { name: 'Africa (Cape Town)', abbrev: 'af-south-1' },
  ];

  form = new FormGroup({
    state: new FormControl(),
  });

  constructor(private apiService: ApiService) {}

  continue(): void { }
  handleStateChange(): void {
    const selectedState = this.form.value.state;

    if (selectedState) {
      const desiredIndex = this.states.map(state => state.abbrev).indexOf(selectedState.abbrev);
      this.form.controls['state'].setValue(this.states[desiredIndex]);

      const queryParams = { options: selectedState.abbrev };
      const queryString = new URLSearchParams(queryParams).toString();
      const googleUrl = `https://www.google.com?${queryString}`;
      window.open(googleUrl);
    }
  }

  fetchData(): void {
   

    this.apiService.fetchData().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
      },
      error: (error: any) => {
        console.error('API Error:', error);
      }
    });
  }
}
