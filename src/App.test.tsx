import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component Integration Test', () => {

  /**
   * Verifica que el componente `App` se renderiza correctamente y que `Counter`
   * muestra el valor inicial correcto.
   */
  it('should render App and Counter', () => {
    render(<App />);

    // Verifica que el título principal de la aplicación se renderiza
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
    
    // Verifica que el contador se renderiza con el valor inicial 0
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  /**
   * Simula un clic en el botón de incremento y verifica que el contador se actualiza correctamente.
   */
  it('should increment count when clicking the increment button', async () => {
    render(<App />);
    
    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton); // Simula clic en el botón de incrementar

    // Verifica que el contador muestra el valor actualizado después de hacer clic
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  /**
   * Simula un clic en el botón de incremento seguido de un clic en el botón de decremento
   * y verifica que el contador vuelve a su valor original.
   */
  it('should decrement count when clicking the decrement button', async () => {
    render(<App />);
    
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    await userEvent.click(incrementButton); // Incrementar a 1
    await userEvent.click(decrementButton); // Decrementar a 0

    // Verifica que el contador muestra el valor actualizado después de hacer clic
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  /**
   * Simula múltiples clics en el botón de decremento e intenta reducir el contador
   * por debajo de cero. Se verifica que el valor mínimo permitido es 0.
   */
  it('should not decrement below zero', async () => {
    render(<App />);
    
    const decrementButton = screen.getByText('Decrement');

    await userEvent.click(decrementButton); // Intentar restar cuando está en 0

    // Verifica que el contador sigue en 0 y no permite valores negativos
    expect(screen.getByText('0')).toBeInTheDocument();
  });

});

