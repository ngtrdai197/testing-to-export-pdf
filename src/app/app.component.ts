import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2Canvs from 'html2canvas';
import autoTable from 'jspdf-autotable';

// declare var jsPDF: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'export-to-pdf';
  public data = [
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
    {
      name: 'Nguyen Huy',
      position: 'Seller',
    },
    {
      name: 'Nguyen Duyen',
      position: 'Enginerring',
    },
    {
      name: 'Nguyen Dai',
      position: 'Dev',
    },
    {
      name: 'Nguyen Loc',
      position: 'Gymer PT',
    },
  ];

  @ViewChild('contentExport') contentExport: ElementRef;
  @ViewChild('table1') table1: HTMLTableElement;

  onExportPdf() {
    const doc = new jsPDF('p', 'pt', 'a4');
    // doc.addHTML(this.contentExport.nativeElement, function () {
    //   doc.save('test.pdf');
    // });

    // html2Canvs(this.contentExport.nativeElement).then((canvas) => {
    //   const parseImage = canvas.toDataURL('image/png');
    //   const width = doc.internal.pageSize.getWidth();
    //   const height = (canvas.height * width) / canvas.width;
    //   doc.addImage(parseImage, 'JPGE', 0, 0, width, height);
    //   doc.save('test.pdf');
    // });
    let finalY = 22;

    // autoTable(doc, {
    //   theme: 'grid',
    //   headStyles: { fontSize: 15 },
    //   bodyStyles: { fontSize: 12, fontStyle: 'normal' },

    //   head: [['ID', 'Name', 'Country']],
    //   body: this.data.map((rec, i) => {
    //     return [i + 1, rec.name, rec.position];
    //   }),
    //   showHead: 'firstPage',
    //   didDrawPage: function (dataTable1) {
    //     console.log('dataTable1 :>> ', dataTable1);
    //     finalY = dataTable1?.doc?.lastAutoTable?.finalY ?? 10;
    //     console.log(finalY);
    //     // console.log(
    //     //   'dataTable1?.doc?.lastAutoTable :>> ',
    //     //   dataTable1?.doc?.lastAutoTable
    //     // );
    //   },
    // });

    autoTable(doc, {
      html: '#table-content',
      useCss: true,
    });
    autoTable(doc, {
      startY: 120,
      html: '#table1',
      useCss: true,
      didDrawPage: (data) => {
        const { left } = data.settings.margin;
        console.log('data :>> ', data);
        console.log('data.table.finalY :>> ', data.table.finalY);

        // finalY = data.table.finalY || 10;
      },
      showHead: 'firstPage',
    });
    console.log('doc.internal.pageSize.height :>> ', doc.internal.pageSize.height);
    autoTable(doc, {
      startY: 120,
      html: '#table2',
      useCss: true,
      showHead: 'firstPage',
    });
    // autoTable(doc, {
    //   startY: finalY + 20,
    //   html: '#table1',
    //   useCss: true,
    // });
    doc.output('dataurlnewwindow'); //to check pdf generate
  }
}
