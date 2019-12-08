import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LegaTestModule } from '../../../test.module';
import { UserManagementDetailComponent } from 'app/admin/user-management/user-management-detail.component';
import { User } from 'app/core/user/user.model';

describe('Component Tests', () => {
  describe('User Management Detail Component', () => {
    let comp: UserManagementDetailComponent;
    let fixture: ComponentFixture<UserManagementDetailComponent>;
    const route = ({
      data: of({ user: new User(1, 'user', 'first', 'last', 'first@last.com', true, 'en', ['ROLE_USER'], 'admin', null, null, null) })
    } as any) as ActivatedRoute;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [LegaTestModule],
        declarations: [UserManagementDetailComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: route
          }
        ]
      })
        .overrideTemplate(UserManagementDetailComponent, '')
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(UserManagementDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.user).toEqual(
          jasmine.objectContaining({
            id: 1,
            login: 'user',
            firstName: 'first',
            lastName: 'last',
            email: 'first@last.com',
            activated: true,
            langKey: 'en',
            authorities: ['ROLE_USER'],
            createdBy: 'admin',
            createdDate: null,
            lastModifiedBy: null,
            lastModifiedDate: null,
            password: null
          })
        );
      });
    });
  });
});