import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMoveComponent } from './pokemon-move.component';

describe('PokemonMoveComponent', () => {
  let component: PokemonMoveComponent;
  let fixture: ComponentFixture<PokemonMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
