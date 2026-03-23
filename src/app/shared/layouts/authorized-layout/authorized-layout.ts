import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-authorized-layout',
  imports: [RouterOutlet, Header],
  templateUrl: './authorized-layout.html',
})
export class AuthorizedLayout {}
