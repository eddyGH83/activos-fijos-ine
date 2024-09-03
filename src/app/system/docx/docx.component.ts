import { Component } from '@angular/core';
import { DocxService } from './service/docx.service';


@Component({
  selector: 'app-docx',
  templateUrl: './docx.component.html',
  styleUrls: ['./docx.component.scss']
})
export class DocxComponent {
  // estructura
  constructor(private wordService: DocxService) { }




  ngOnInit(): void {   
  }

  async modifyAndDownloadWord() {
    alert('Descargando archivo');
    const templateUrl = 'assets/plantillas/plantilla.docx'; // Ruta al archivo Word plantilla
    const text = 'Texto sobrescrito';

    const modifiedWordBlob = await this.wordService.modifyWord(templateUrl, text);

    // Crear un enlace para descargar el documento Word modificado
    const url = window.URL.createObjectURL(modifiedWordBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultado.docx';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
  
}



