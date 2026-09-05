import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBuscadorPokemonComponentComponent } from './registro-buscador-pokemon-component.component';

describe('RegistroBuscadorPokemonComponentComponent', () => {
  let component: RegistroBuscadorPokemonComponentComponent;
  let fixture: ComponentFixture<RegistroBuscadorPokemonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroBuscadorPokemonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroBuscadorPokemonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
