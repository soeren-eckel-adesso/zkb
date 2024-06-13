import { waitForAsync, TestBed } from "@angular/core/testing";

import { ContentBoxUiComponent } from "@adesso/ui-content-box";
import { ContentBoxUiModule } from "@adesso/ui-content-box";
import { RouterTestingModule } from "@angular/router/testing";

describe("@adesso/ui-content-box", () => {
  let fixture, component;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ContentBoxUiModule, RouterTestingModule],
      }).compileComponents();
      fixture = TestBed.createComponent(ContentBoxUiComponent);
      component = fixture.debugElement.componentInstance;
    })
  );

  it(
    "should create a h2 with the headline when only headline is set",
    waitForAsync(() => {
      expect(component).toBeTruthy();
      component.headline = "Welcome to app!";
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const h2 = compiled.querySelector("h2");
      expect(h2.textContent).toContain("Welcome to app!");
    })
  );
});
