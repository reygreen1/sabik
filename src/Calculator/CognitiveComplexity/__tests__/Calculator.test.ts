import { Calculator } from '../Calculator';
import { ComplexityCountableNode } from '../../../TestHelpers/ComplexityCountableNode';

describe('Cognitive Complexity Calculator', () => {
  let calculator: Calculator;
  beforeAll(() => {
    calculator = new Calculator();
  });

  describe('should increment when incrementable node.', () => {
    it('should returns 1 when routeNode is incrementable node.', () => {
      const actual = calculator.calculate(
        new ComplexityCountableNode({ DSL: 'I' })
      );

      expect(Number(actual)).toBe(1);
    });

    it('should returns 1 when childNode is incrementable node.', () => {
      const actual = calculator.calculate(
        new ComplexityCountableNode({
          DSL: '',
          children: [{ DSL: 'I' }],
        })
      );

      expect(Number(actual)).toBe(1);
    });

    it('should return 1 when incrementable node in nest level up node.', () => {
      const actual = calculator.calculate(
        new ComplexityCountableNode({
          DSL: 'N',
          children: [{ DSL: 'I' }],
        })
      );

      expect(Number(actual)).toBe(1);
    });

    it('should return 2 when net incrementable node in nest level up node.', () => {
      const actual = calculator.calculate(
        new ComplexityCountableNode({
          DSL: 'N',
          children: [{ DSL: 'IN' }],
        })
      );

      expect(Number(actual)).toBe(2);
    });
  });
});
