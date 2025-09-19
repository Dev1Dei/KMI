import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-kmi',
  imports: [FormsModule, CommonModule],
  templateUrl: './kmi.html',
  styleUrl: './kmi.css'
})
export class KMI {
  ugis: number | null = null;
  svoris: number | null = null;
  rezultatas: number | null = null;

  skaiciuoti() {
    if (this.ugis && this.svoris) {
      const ugis_m = this.ugis / 100;
      this.rezultatas = this.svoris / (ugis_m * ugis_m);
    }
  }
  get alertTipas(): string {
    if (this.rezultatas === null) return 'alert-info';

    if (this.rezultatas < 18.5) {
      return 'alert-warning';
    } else if (this.rezultatas < 25) {
      return 'alert-success';
    } else if (this.rezultatas < 30) {
      return 'alert-warning';
    } else {
      return 'alert-danger';
    }
  }
}
