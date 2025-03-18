import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Counter from './Counter';

describe('Counter Component', () => {
  
  /**
   * Verifica que el componente `Counter` se renderiza correctamente con el valor inicial proporcionado.
   */
  it('should render Counter with the correct initial count', () => {
    render(<Counter count={5} increment={() => {}} decrement={() => {}} />);
    
    // Verifica que el texto con el número 5 está en el documento
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  /**
   * Verifica que el botón de incremento llama a la función `increment` cuando es presionado.
   */
  it('should call increment function when clicking increment button', async () => {
    const incrementMock = vi.fn(); // Crea un mock para la función de incremento

    render(<Counter count={0} increment={incrementMock} decrement={() => {}} />);
    
    const button = screen.getByText('Increment');
    await userEvent.click(button); // Simula un clic en el botón

    // Verifica que la función `incrementMock` se haya llamado exactamente una vez
    expect(incrementMock).toHaveBeenCalledTimes(1);
  });

  /**
   * Verifica que el botón de decremento llama a la función `decrement` cuando es presionado.
   */
  it('should call decrement function when clicking decrement button', async () => {
    const decrementMock = vi.fn(); // Crea un mock para la función de decremento

    render(<Counter count={0} increment={() => {}} decrement={decrementMock} />);
    
    const button = screen.getByText('Decrement');
    await userEvent.click(button); // Simula un clic en el botón

    // Verifica que la función `decrementMock` se haya llamado exactamente una vez
    expect(decrementMock).toHaveBeenCalledTimes(1);
  });

  /**
   * Captura un snapshot del componente `Counter` y lo compara con snapshots anteriores
   * para asegurar que no haya cambios inesperados en la UI.
   */
  it('should match the snapshot', () => {
    const { asFragment } = render(<Counter count={10} increment={() => {}} decrement={() => {}} />);
    
    // Compara la estructura renderizada con el snapshot guardado
    expect(asFragment()).toMatchSnapshot();
  });

});

