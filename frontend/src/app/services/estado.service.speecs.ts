import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EstadoService } from './estado.service';

describe('EstadoService', () => {
  let service: EstadoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EstadoService]
    });
    service = TestBed.inject(EstadoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to cambiar_estado endpoint', () => {
    const estado = 'prueba_script';
    const mockResponse = { message: 'Estado cambiado a prueba_script' };

    service.cambiarEstado(estado).subscribe(
      response => {
        expect(response).toEqual(mockResponse);
      },
      error => {
        fail('Error de solicitud: ' + JSON.stringify(error));
      }
    );

    const req = httpTestingController.expectOne('http://192.168.50.202:3000/cambiar_estado');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ estado });

    req.flush(mockResponse);
  });
});