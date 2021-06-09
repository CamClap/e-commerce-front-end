import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/interfaces/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  isbn = 0;
  livre ={}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.isbn = +value.get('isbn');
    });
    this.livreService.getOneByref(this.isbn).subscribe((res) =>{
      this.livre = res
    })
  }
  ajoutPanier =() => {
    this.router.navigateByUrl('/home');
  }

}
