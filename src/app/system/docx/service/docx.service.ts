import { Injectable } from '@angular/core';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import * as JSZip from 'jszip';

@Injectable({
  providedIn: 'root',
})



export class DocxService {

  constructor() { }

  async modifyWord(templateUrl: string, text: string): Promise<Blob> {
    // Fetch the existing Word document
    const response = await fetch(templateUrl);
    const arrayBuffer = await response.arrayBuffer();

    // Load the document using JSZip
    const zip = new JSZip();
    const content = await zip.loadAsync(arrayBuffer);

    // Modify the document content
    const doc = new Document({
      sections: [{
        children: [
          new Paragraph({
            children: [
              new TextRun(text),
            ],
          }),
        ],
      }],
    });

    // Serialize the document to a blob
    const blob = await Packer.toBlob(doc);
    return blob;
  }
}