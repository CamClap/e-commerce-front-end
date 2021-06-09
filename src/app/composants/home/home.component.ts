import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService} from 'src/app/services/livre.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  livres = [];
  constructor(private router: Router, private route: ActivatedRoute, private livreServices : LivreService) {}

  ngOnInit(): void {
    this.livreServices.getAllLivres().subscribe(
      (res) => {
        this.livres = res
      }
    );
  }
  detailArticle = () => {};
}
