import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { filter, map } from 'rxjs/operators';
import { JhiEventManager } from 'ng-jhipster';

import { IDocument } from 'app/shared/model/document.model';
import { AccountService } from 'app/core/auth/account.service';
import { DocumentService } from './document.service';

@Component({
  selector: 'jhi-document',
  templateUrl: './document.component.html'
})
export class DocumentComponent implements OnInit, OnDestroy {
  documents: IDocument[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected documentService: DocumentService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.documentService
      .query()
      .pipe(
        filter((res: HttpResponse<IDocument[]>) => res.ok),
        map((res: HttpResponse<IDocument[]>) => res.body)
      )
      .subscribe((res: IDocument[]) => {
        this.documents = res;
      });
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
    });
    this.registerChangeInDocuments();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDocument) {
    return item.id;
  }

  registerChangeInDocuments() {
    this.eventSubscriber = this.eventManager.subscribe('documentListModification', response => this.loadAll());
  }
}
