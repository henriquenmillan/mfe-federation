import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve disparar o evento "navigateToMfe" ao chamar navigateToCadastro', () => {
    const dispatchSpy = spyOn(window, 'dispatchEvent');
    component.navigateToCadastro();

    expect(dispatchSpy).toHaveBeenCalled();
    const event = dispatchSpy.calls.mostRecent().args[0] as CustomEvent;

    expect(event.type).toBe('navigateToMfe');
    expect(event.detail).toEqual({
      url: 'cadastro',
      param: { teste: '123' },
      callback: jasmine.any(Function),
    });
  });
});