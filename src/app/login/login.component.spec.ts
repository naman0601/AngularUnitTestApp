import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a disabled login button initially', () => {
    const loginButton = fixture.nativeElement.querySelector('button');
    expect(loginButton.disabled).toBeTruthy();
  });

  it('should enable login button when form is valid', () => {
    const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
    const passwordInput = fixture.nativeElement.querySelector('input[type="password"]');
    const loginButton = fixture.nativeElement.querySelector('button');
    
    // Simulate entering valid data
    emailInput.value = 'test@example.com';
    passwordInput.value = 'password';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    
    expect(component.loginForm.valid).toBeTruthy();
    expect(loginButton.disabled).toBeFalsy();
  });
});
