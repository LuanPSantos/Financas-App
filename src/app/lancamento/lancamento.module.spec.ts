import { LancamentoModule } from './lancamento.module';

describe('LancamentoModule', () => {
  let lancamentoModule: LancamentoModule;

  beforeEach(() => {
    lancamentoModule = new LancamentoModule();
  });

  it('should create an instance', () => {
    expect(lancamentoModule).toBeTruthy();
  });
});
