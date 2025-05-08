import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireChatComponent } from './ng-fire-chat.component';

describe('NgFireChatComponent', () => {
  let component: NgFireChatComponent;
  let fixture: ComponentFixture<NgFireChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFireChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFireChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
