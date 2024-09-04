import { Component } from '@angular/core';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.scss']
})
export class ActivosComponent {
  items: any=[];

  activos: any = []
  activo: any = {}


  constructor() { }

  ngOnInit() {
    this.activos = [
      {
        codigo:"INE-1-CE-03-08-01",
        descripcion:"Computadora de escritorio",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-02",
        descripcion:"Computadora portátil",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-03",
        descripcion:"Impresora",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-04",
        descripcion:"Proyector",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-05",
        descripcion:"Teléfono móvil",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-06",
        descripcion:"Teléfono fijo",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-07",
        descripcion:"Escritorio",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      },
      {
        codigo:"INE-1-CE-03-08-08",
        descripcion:"Silla de escritorio",
        serie:"123456",
        fecha_registro:"2021-01-01",
        estado:"BUENO",
        codigo_registro:"123456",
        observaciones:"Ninguna",
        unidad_medida:"PZA",
      }
    ];


    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              //this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              //this.delete();
          }
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
  ];

  }




}
