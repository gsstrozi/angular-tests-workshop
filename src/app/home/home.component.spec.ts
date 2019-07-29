import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`deveria criar componente 'Home'`, () => {
    expect(component).toBeTruthy();
  });

  it(`deveria renderizar Card 'Login'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Login');
  });

  it(`deveria chamar funcao 'onLogin'`, () => {
    spyOn(component, 'onLogin');

    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();

    expect(component.onLogin).toHaveBeenCalled();
  });

  it(`deveria redirecionar para rota '/login'`, () => {
    spyOn(component, 'onLogin');

    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();

    expect(component.onLogin).toHaveBeenCalled();
  });
});
